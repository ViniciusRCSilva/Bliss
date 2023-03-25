import { GreenBg } from "@/components/GreenBg";
import { Topbar } from "@/components/Topbar";
import Image from "next/image";

import Img from '../../public/frase_do_dia.svg'

export default function Home() {
  return (
    <>
      <Topbar/>

      <div className="flex flex-col w-full h-screen items-center pt-16 bg-white">
        <GreenBg>
          <div className="flex flex-col w-[80%] justify-center items-center gap-3">  
            <p className="font-medium text-xl">Frase do dia</p>
            <Image src={Img} alt="Imagem frase do dia" width={180} />
            <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, facere aperiam. Aliquam odio dolorem omnis animi, ab similique totam impedit distinctio.</p>
          </div>
        </GreenBg>
      </div>
    </>
  )
}
