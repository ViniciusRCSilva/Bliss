import Input from "@/components/Input";
import { EnvelopeSimple, Password, SmileyWink } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

import Logo from '../../public/logo_bliss.svg'
import LateralImage from '../../public/imagem_lateral_cadastro.svg'

export default function Register() {
    return (
        <div className="flex flex-col lg:flex-row bg-[url('../../public/bottom_bliss.svg')] bg-no-repeat bg-bottom bg-contain sm:bg-none md:justify-center justify-start pt-[10vh] md:pt-0 items-center h-screen text-gray animate-screenOpacity">
            <div className="lg:flex flex-col hidden text-white bg-green-blue w-[60%] h-full items-center justify-center gap-4 px-5">
                <Image src={LateralImage} alt="Image lateral" width={500}/>
                <p className="text-3xl font-medium">Novo por aqui?</p>
                <p className="text-xl font-light text-center">Crie uma conta no Bliss para desbloquear uma experiência personalizada de bem-estar, projetada para ajudá-lo a alcançar seus objetivos de saúde mental e física.</p>
            </div>
            
            <div className="flex flex-col justify-center items-center w-[80%] md:w-[40%] gap-10">
                <div>
                    <Image src={Logo} alt="Logotipo do Bliss" width={190} />
                </div>

                <form className="flex flex-col justify-center items-center gap-5">
                    <p className="font-light text-xl">CADASTRO</p>

                    <div className="flex flex-col gap-5">
                        <Input icon={<SmileyWink/>} type="text" placeholder="Nome" />

                        <Input icon={<EnvelopeSimple/>} type="email" placeholder="Email" />
                        
                        <Input icon={<Password/>} type="password" placeholder="Senha" />
                    </div>

                    <Link href='/login'>
                        <p className="font-light text-sm underline">Já tenho uma conta!</p>
                    </Link>

                    <div onClick={() => Router.push('/additionalInfo')} className="bg-green-blue rounded-lg px-4 py-2 text-xl text-white shadow-md lg:cursor-pointer">CADASTRAR</div>
                </form>
            </div>
        </div>
    )
  }
  