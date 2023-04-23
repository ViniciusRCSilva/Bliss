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
import frases  from '@/utils/frases_motivacionais.json'

import Img from '../../public/frase_do_dia.svg'

interface VisibleProps {
  id: 'sad' | 'neutral' | 'happy'
  visible: boolean
  color?: string
  disable: boolean
  message: any
}

export default function Home() {
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
  const [todayPhrase, setTodayPhrase] = useState('')
  const date = new Date

  function handleOpenMessage(index: number) {
    setVisible({ ...optionList[index], visible: true, color: 'text-green-blue transition-colors', disable: true })
  }

  function handleChangePhrase(){
    switch(date.getDay()){
      case 0:
        setTodayPhrase(frases.domingo[date.getDate()])
        break;
      case 1:
        setTodayPhrase(frases.segunda[date.getDate()])
        break;
      case 2:
        setTodayPhrase(frases.terca[date.getDate()])
        break;
      case 3:
        setTodayPhrase(frases.quarta[date.getDate()])
        break;
      case 4:
        setTodayPhrase(frases.quinta[date.getDate()])
        break;
      case 5:
        setTodayPhrase(frases.sexta[date.getDate()])
        break;
      case 6:
        setTodayPhrase(frases.sabado[date.getDate()])
        break;
      default:
        setTodayPhrase('Não foi possível capturar a frase do dia')
    }
  }

  useEffect(() => {
    handleChangePhrase()
  }, [])

  function getFormat(n: number){
    let number = ("0" + n).slice(-2)
    return number
  }

  return (
    <div className="animate-screenOpacity">
      <Topbar />

      <div className="flex flex-col lg:flex-row w-full h-screen justify-between items-center pt-16 gap-5 bg-white">
        <GreenBg>
          <div className="flex flex-col w-[80%] justify-center items-center gap-3">
            <p className="font-medium text-xl lg:text-4xl">Frase do dia</p>
            <p className="text-center text-sm lg:text-2xl lg:font-light">{getFormat(date.getDate())}/{getFormat(date.getMonth()+1)}/{date.getFullYear()}</p>
            <Image src={Img} alt="Imagem frase do dia" width={300} className="hidden lg:flex" />
            <Image src={Img} alt="Imagem frase do dia" width={180} className="flex lg:hidden" />
            <p className="text-center text-sm lg:text-2xl lg:font-light">"{todayPhrase}"</p>
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

          <Navigate active='house' />
        </div>

      </div>
    </div>
  )
}