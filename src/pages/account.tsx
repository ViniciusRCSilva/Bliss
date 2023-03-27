import { GreenBg } from "@/components/GreenBg";
import { LinkUser } from "@/components/LinksUser";
import { Topbar } from "@/components/Topbar";
import { ArrowsCounterClockwise, BookBookmark, House, PencilSimple, Phone, Smiley, SmileyMeh, SmileySad } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import Img from '../../public/usuário.svg'

export default function Account() {
  return (
    <div className="animate-screenOpacity">
      <Topbar />

      <div className="flex flex-col lg:flex-row w-full h-screen items-center pt-16 gap-5 bg-white">
        <GreenBg>
            <div className="flex flex-col w-full gap-5 items-end">
                <Link href='/' className="flex items-center gap-3 mr-10">                
                    <div className="flex justify-center items-center rounded-full w-10 h-10 bg-white text-green-blue text-3xl">
                        <PencilSimple weight="bold" />
                    </div>
                    <p className="hidden lg:flex underline">Edite seu perfil</p>
                </Link>

                <div className="flex w-full justify-center items-center gap-5">
                    <Image src={Img} alt="Imagem frase do dia" width={200} className="hidden lg:flex" />
                    <Image src={Img} alt="Imagem frase do dia" width={120} className="flex lg:hidden" />
                    <div className="flex flex-col gap-2">                
                        <p className="text-2xl lg:text-5xl">Olá, <br/>Usuário!</p>
                        <div className="flex items-center font-light gap-2">
                            <p className="text-sm lg:text-xl">Como eu me sinto hoje?</p>
                            <Smiley className="text-2xl lg:text-3xl" weight="fill" />
                        </div>
                        <p className="text-sm lg:text-xl font-light">Hábitos completos hoje: 3/7</p>
                    </div>
                </div>
            </div>
        </GreenBg>

        <div className="flex flex-col w-full lg:w-[50%] lg:h-full justify-evenly items-center">
          <div className="flex w-full h-[35.5vh] lg:h-[90%] lg:items-center justify-center">
            <div className="flex flex-col w-[80%] items-center gap-5">
              <p className="text-xl lg:text-2xl">Navegue pelas outras páginas:</p>

                <div className="flex flex-col items-start gap-3">
                    <LinkUser link="" icon={<House />} linkName="Início" />
                    <LinkUser link="habits" icon={<ArrowsCounterClockwise />} linkName="Hábitos" />
                    <LinkUser link="" icon={<BookBookmark />} linkName="Diário" />
                    <LinkUser link="" icon={<Phone />} linkName="Contatos de ajuda" />
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}