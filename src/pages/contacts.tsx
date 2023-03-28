import { GreenBg } from "@/components/GreenBg";
import { Navigate } from "@/components/Navigate";
import { Select } from "@/components/Select";
import { Topbar } from "@/components/Topbar";
import Image from "next/image";

import Img from '../../public/imagem_contatos.svg'

export default function Contacts() {
  return (
    <div className="animate-screenOpacity">
      <Topbar />

      <div className="flex flex-col lg:flex-row w-full h-screen items-center pt-16 gap-5 bg-white">
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
          <div className="flex w-full h-[35.5vh] lg:h-[90%] lg:items-center justify-center">
            <div className="flex flex-col w-[80%] gap-5">
                <p>Em qual estado você mora?</p>
            
                <Select>
                    <option value="" selected></option>
                    <option>Acre</option>
                    <option>Amazonas</option>
                    <option>Amapá</option>
                    <option>Brasília</option>
                </Select>
            </div>
          </div>

          <Navigate back="Diário" linkBack="diary" visible="hidden" />
        </div>

      </div>
    </div>
  )
}
