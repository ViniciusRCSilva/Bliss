'use client'

import { GreenBg } from "@/components/GreenBg";
import { HappyAnswer } from "@/components/HappyAnswer";
import { Navigate } from "@/components/Navigate";
import { NeutralAnswer } from "@/components/NeutralAnswer";
import { SadAnswer } from "@/components/SadAnswer";
import { Topbar } from "@/components/Topbar";
import { Smiley, SmileyMeh, SmileySad } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import Img from '../../public/frase_do_dia.svg'
import { randomAuthor, randomInt } from "@/utils";

interface VisibleProps {
  id: 'sad' | 'neutral' | 'happy'
  visible: boolean
  color?: string
  disable: boolean
  message: any
}

interface PhrasesProps {
  texto: string
  autor: string
}

interface HomeProps {
  phrases: PhrasesProps[]
}

export default function Home({ phrases }: HomeProps) {
  const optionList: VisibleProps[] = [
    {
      id: 'sad',
      visible: false,
      message: <SadAnswer />,
      disable: false
    },
    {
      id: 'neutral',
      visible: false,
      message: <NeutralAnswer />,
      disable: false
    },
    {
      id: 'happy',
      visible: false,
      message: <HappyAnswer />,
      disable: false
    },
  ]

  const [visible, setVisible] = useState<VisibleProps>()

  function handleOpenMessage(index: number) {
    setVisible({ ...optionList[index], visible: true, color: 'text-green-blue transition-colors', disable: true })
  }
  
  const [randomPhrase, setRandomPhrase] = useState<PhrasesProps>()

  useEffect(() => {

    setRandomPhrase(phrases[randomInt(1, 10)])

  }, [])

  return (
    <div className="animate-screenOpacity">
      <Topbar />

      <div className="flex flex-col lg:flex-row w-full h-screen items-center pt-16 gap-5 bg-white">
        <GreenBg>
          <div className="flex flex-col w-[80%] justify-center items-center gap-3">
            <p className="font-medium text-xl lg:text-4xl">Frase do dia</p>
            <Image src={Img} alt="Imagem frase do dia" width={300} className="hidden lg:flex" />
            <Image src={Img} alt="Imagem frase do dia" width={180} className="flex lg:hidden" />
            <p className="text-center text-sm lg:text-2xl lg:font-light">"{randomPhrase?.texto}"</p>
            <p className="text-center text-sm lg:text-2xl font-light">{randomPhrase?.autor}</p>
          </div>
        </GreenBg>

        <div className="flex flex-col w-full lg:w-[50%] lg:h-full justify-evenly items-center">
          <div className="flex w-full h-[35.5vh] lg:h-[90%] lg:items-center justify-center">
            <div className="flex flex-col w-[80%] items-center gap-5">
              <p className="text-xl">Como está se sentindo hoje?</p>

              <div className="flex w-full justify-evenly items-center text-4xl lg:text-5xl">
                {optionList.map((opt, index) => {
                  if (opt.id === 'sad') {
                    return (
                      <button onClick={() => handleOpenMessage(index)} key={index} disabled={visible?.disable}><SmileySad className={`${opt.id === visible?.id ? visible?.color : 'text-gray'} lg:hover:scale-105 lg:transition-transform`} /></button>
                    )
                  } else if (opt.id === 'neutral') {
                    return (
                      <button onClick={() => handleOpenMessage(index)} key={index} disabled={visible?.disable}><SmileyMeh className={`${opt.id === visible?.id ? visible?.color : 'text-gray'} lg:hover:scale-105 lg:transition-transform`} /></button>
                    )
                  } else if (opt.id === 'happy') {
                    return (
                      <button onClick={() => handleOpenMessage(index)} key={index} disabled={visible?.disable}><Smiley className={`${opt.id === visible?.id ? visible?.color : 'text-gray'} lg:hover:scale-105 lg:transition-transform`} /></button>
                    )
                  }
                })}
              </div>

              {visible && (
                <div className={`font-light overflow-y-auto h-[20vh] lg:h-[30vh] border-2 border-green-blue rounded-lg scrollbar-thin scrollbar-track-slate-200 scrollbar-track-rounded-lg scrollbar-thumb-green-blue scrollbar-thumb-rounded-lg animate-screenOpacity`}>
                  {visible.message}
                </div>
              )}

            </div>
          </div>

          <Navigate back="Sair" linkBack="login" next="Hábitos" linkNext="habits" />
        </div>

      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const revalidate = 60 * 60 * 24 * 7;
  const response = await fetch(`https://pensador-api.vercel.app/?term=${randomAuthor}`)
  const data = await response.json()

  return {
    props: {
      phrases: data.frases
    },
    revalidate
  }
}