import { GreenBg } from "@/components/GreenBg";
import { Navigate } from "@/components/Navigate";
import { Topbar } from "@/components/Topbar";
import Image from "next/image";
import { BrazilStates } from "@/components/BrazilStates";

import Img from '../../public/imagem_contatos.svg'
import { ContactBox } from "@/components/ContactBox";

export default function Contacts() {
  return (
    <div className="animate-screenOpacity">
      <Topbar active="contacts" />

      <div className="flex flex-col lg:flex-row w-full h-screen justify-between items-center pt-16 gap-5 bg-white">
        <GreenBg>
            <div className="flex flex-col w-[90%] justify-center items-center gap-5">
                <p className="font-medium text-xl lg:text-4xl">Contatos de ajuda</p>
                <div className="flex w-full justify-center items-center gap-2 lg:gap-5">
                    <Image src={Img} alt="Imagem frase do dia" width={180} className="hidden lg:flex" />
                    <Image src={Img} alt="Imagem frase do dia" width={100} className="flex lg:hidden" />
                    <p className="text-xs lg:text-lg lg:font-light lg:w-[50%]">
                        Pedir ajuda psicológica é essencial para resolver problemas e melhorar a saúde mental. 
                        O apoio profissional pode ajudar a lidar com emoções, enfrentar dificuldades e prevenir doenças mentais. 
                        É importante buscar ajuda quando os problemas emocionais começam a afetar o dia a dia e o bem-estar da pessoa, pois o psicólogo é capacitado para promover a saúde mental e o bem-estar.
                    </p>
                </div>
            </div>
        </GreenBg>

        <div className="flex flex-col w-full lg:w-[50%] lg:h-full justify-evenly items-center">
          <div className="flex w-full h-[38.5vh] lg:h-[90%] lg:items-center justify-center">
            <div className="flex flex-col w-[80%] gap-5">
                <p>Em qual estado você mora?</p>

                <div className="lg:w-[60%]">
                  <BrazilStates/>
                </div>

                <p>Principais contatos:</p>
                <div className="flex flex-col w-full h-[20vh] lg:h-[30vh] p-2 overflow-y-auto items-center justify-start gap-6 scrollbar-thin scrollbar-track-slate-200 scrollbar-track-rounded-lg scrollbar-thumb-green-blue scrollbar-thumb-rounded-lg animate-screenOpacity">
                  <ContactBox/>
                  <ContactBox/>
                  <ContactBox/>
                  <ContactBox/>
                  <ContactBox/>
                  <ContactBox/>
                  <ContactBox/>
                </div>
            </div>
          </div>

          <Navigate active="contacts" />
        </div>

      </div>
    </div>
  )
}
