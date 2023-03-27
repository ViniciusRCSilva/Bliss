import { GreenBg } from "@/components/GreenBg";
import { Navigate } from "@/components/Navigate";
import { Topbar } from "@/components/Topbar";
import { Smiley, SmileyMeh, SmileySad } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

import Img from '../../public/frase_do_dia.svg'

interface VisibleProps {
  id: 'sad' | 'neutral' | 'happy'
  visible: boolean
  color?: string
  message: string
}

export default function Home() {
  const optionList: VisibleProps[] = [
    {
      id: 'sad',
      visible: false,
      message: 'Poxa que pena... por que não tenta fazer isso:'
    },
    {
      id: 'neutral',
      visible: false,
      message: 'Teste 2'
    },
    {
      id: 'happy',
      visible: false,
      message: 'Que bom que você está feliz! Continue assim!'
    },
  ]

  const [visible, setVisible] = useState<VisibleProps>()

  function handleOpenMessage(index: number) {
    setVisible({ ...optionList[index], visible: true, color: 'text-green-blue transition-colors'})
  }

  return (
    <div className="animate-screenOpacity">
      <Topbar />

      <div className="flex flex-col lg:flex-row w-full h-screen items-center pt-16 gap-5 bg-white">
        <GreenBg>
          <div className="flex flex-col w-[80%] justify-center items-center gap-3">
            <p className="font-medium text-xl lg:text-4xl">Frase do dia</p>
            <Image src={Img} alt="Imagem frase do dia" width={300} className="hidden lg:flex" />
            <Image src={Img} alt="Imagem frase do dia" width={180} className="flex lg:hidden" />
            <p className="text-center text-sm lg:text-2xl lg:font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facere aperiam. Aliquam odio dolorem omnis animi, ab similique totam impedit distinctio.</p>
          </div>
        </GreenBg>

        <div className="flex flex-col w-full lg:w-[50%] lg:h-full justify-evenly items-center">
          <div className="flex w-full h-[35.5vh] lg:h-[90%] lg:items-center justify-center">
            <div className="flex flex-col w-[80%] items-center gap-5">
              <p className="text-xl">Como está se sentindo hoje?</p>

              <div className="flex w-full justify-evenly items-center text-5xl">
                {optionList.map((opt, index) => {
                  if (opt.id === 'sad') {
                    return (
                      <SmileySad key={index} onClick={() => handleOpenMessage(index)} className={`${opt.id === visible?.id ? visible?.color : 'text-gray'} cursor-pointer lg:hover:scale-105 lg:transition-transform`} />
                    )
                  } else if (opt.id === 'neutral') {
                    return (
                      <SmileyMeh key={index} onClick={() => handleOpenMessage(index)} className={`${opt.id === visible?.id ? visible?.color : 'text-gray'} cursor-pointer lg:hover:scale-105 lg:transition-transform`} />
                    )
                  } else if (opt.id === 'happy') {
                    return (
                      <Smiley key={index} onClick={() => handleOpenMessage(index)} className={`${opt.id === visible?.id ? visible?.color : 'text-gray'} cursor-pointer lg:hover:scale-105 lg:transition-transform`} />
                    )
                  }
                })}
              </div>

              {visible && (
                <div className={`font-light animate-screenOpacity`}>
                  <p>{visible.message}</p>
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
