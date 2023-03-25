import Input from "@/components/Input";
import { Select } from "@/components/Select";
import { Baby, MapTrifold, SmileyWink } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import Logo from '../../public/logo_bliss.svg'
import LateralImage from '../../public/imagem_lateral_cadastro.svg'

export default function AdditionalInfo() {
    return (
        <div className="flex flex-col md:flex-row bg-[url('../../public/bottom_bliss.svg')] bg-no-repeat bg-bottom bg-contain sm:bg-none justify-center items-center h-screen text-gray animate-screenOpacity">
            <div className="md:flex flex-col hidden text-white bg-green-blue w-[60%] h-full items-center justify-center gap-4 px-5">
                <Image src={LateralImage} alt="Image lateral" width={500}/>
                <p className="text-3xl font-medium">Novo por aqui?</p>
                <p className="text-xl font-light text-center">Crie uma conta no Bliss para desbloquear uma experiência personalizada de bem-estar, projetada para ajudá-lo a alcançar seus objetivos de saúde mental e física.</p>
            </div>

            <div className="flex flex-col justify-center items-center w-[80%] md:w-[40%] gap-10">
                <div>
                    <Image src={Logo} alt="Logotipo do Bliss" width={190} />
                </div>

                <form className="flex flex-col justify-center items-center gap-10">
                    <div className="flex flex-col items-center justify-center gap-1">                        
                        <div className="flex items-center gap-1">
                            <p className="font-light text-xl">Só mais algumas coisas</p>
                            <SmileyWink className="text-2xl text-green-blue" />
                        </div>

                        <p className="text-green-blue">(opcional)</p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col">
                            <p>Data de nascimento</p>
                            <Input icon={<Baby/>} type="date" />
                        </div>
                        
                        <Input icon={<MapTrifold/>} type="text" placeholder="Estado" />

                        <div className="flex flex-col">
                            <p>Como você descobriu o Bliss?</p>
                            <Select>
                                <option value="" selected></option>
                                <option value="">Por um amigo</option>
                                <option value="">Vi na rede social</option>
                                <option value="">Anúncio no Google</option>
                                <option value="">Outro</option>
                            </Select>
                        </div>
                    </div>

                    <div className="flex w-full items-end justify-between">
                        <button className="bg-green-blue rounded-lg px-4 py-2 text-xl text-white shadow-md">CONTINUAR</button>

                        <Link href={'/'} className="underline bg-white p-2 rounded-lg shadow-md md:shadow-none md:p-0">Pular</Link>
                    </div>
                </form>
            </div>
        </div>
    )
  }
  