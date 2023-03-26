import { GreenBg } from "@/components/GreenBg";
import { Navigate } from "@/components/Navigate";
import { Topbar } from "@/components/Topbar";
import { Smiley, SmileyMeh, SmileySad } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

import Img from '../../public/frase_do_dia.svg'

export default function Home() {
  const [color1, setColor1] = useState('gray')
  const [color2, setColor2] = useState('gray')
  const [color3, setColor3] = useState('gray')

  const [visible1, setVisible1] = useState('hidden')
  const [visible2, setVisible2] = useState('hidden')
  const [visible3, setVisible3] = useState('hidden')

  function colorChange1(){
    setColor1('green-blue')
    setVisible1('flex')

    setColor2('gray')
    setVisible2('hidden')

    setColor3('gray')
    setVisible3('hidden')
  }

  function colorChange2(){
    setColor2('green-blue')
    setVisible2('flex')

    setColor1('gray')
    setVisible1('hidden')

    setColor3('gray')
    setVisible3('hidden')
  }

  function colorChange3(){
    setColor3('green-blue')
    setVisible3('flex')

    setColor1('gray')
    setVisible1('hidden')

    setColor2('gray')
    setVisible2('hidden')
  }

  return (
    <div className="animate-screenOpacity">
      <Topbar/>

      <div className="flex flex-col w-full h-screen items-center pt-16 gap-5 bg-white">
        <GreenBg>
          <div className="flex flex-col w-[80%] justify-center items-center gap-3">  
            <p className="font-medium text-xl">Frase do dia</p>
            <Image src={Img} alt="Imagem frase do dia" width={180} />
            <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facere aperiam. Aliquam odio dolorem omnis animi, ab similique totam impedit distinctio.</p>
          </div>
        </GreenBg>

        <div className="flex w-full h-[35.5vh] justify-center">
          <div className="flex flex-col w-[80%] items-center gap-5">
            <p className="text-xl">Como está se sentindo hoje?</p>

            <div className="flex w-full justify-evenly items-center text-5xl">
              <SmileySad onClick={colorChange1} className={`text-${color1} transition-colors`} />
              <SmileyMeh onClick={colorChange2} className={`text-${color2} transition-colors`} />
              <Smiley onClick={colorChange3} className={`text-${color3} transition-colors`} />
            </div>

            <div className={`${visible1} font-light animate-screenOpacity`}>
              <p>Poxa, que pena... Por que não tenta fazer isso:</p>
            </div>

            <div className={`${visible2} font-light animate-screenOpacity`}>
              <p>Teste 2</p>
            </div>

            <div className={`${visible3} font-light animate-screenOpacity`}>
              <p>Que bom que você está feliz! Continue assim!</p>
            </div>
          </div>
        </div>

        <Navigate back="Sair" linkBack="login" next="Hábitos" linkNext="" />

      </div>
    </div>
  )
}
