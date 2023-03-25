import Input from "@/components/Input";
import { EnvelopeSimple, Password } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import Logo from '../../public/logo_bliss.svg'
import LateralImage from '../../public/imagem_lateral_login.svg'

export default function Login() {
    return (
        <div className="flex flex-col lg:flex-row bg-[url('../../public/bottom_bliss.svg')] bg-no-repeat bg-bottom bg-contain sm:bg-none md:justify-center justify-start pt-[4vh] md:pt-0 items-center w-full h-screen text-gray animate-screenOpacity">
            <div className="lg:flex flex-col hidden text-white bg-green-blue w-[60%] h-full items-center justify-center gap-4 px-5">
                <Image src={LateralImage} alt="Image lateral" width={500}/>
                <p className="text-3xl font-medium">Seja bem-vindo(a)!</p>
                <p className="text-xl font-light">Cuide da sua mente, corpo e alma com Bliss - sua jornada pessoal de bem-estar</p>
            </div>

            <div className="flex flex-col justify-center items-center w-[80%] md:w-[40%] gap-10">
                <div>
                    <Image src={Logo} alt="Logotipo do Bliss" width={190} />
                </div>

                <form className="flex flex-col justify-center items-center gap-5">
                    <p className="font-light text-xl">LOGIN</p>

                    <div className="flex flex-col gap-5">
                        <Input icon={<EnvelopeSimple/>} type="email" placeholder="Email" />
                        
                        <Input icon={<Password/>} type="password" placeholder="Senha" />
                    </div>

                    <div className="flex w-full justify-between items-center">
                        <Link href='/'>
                            <p className="font-light text-sm underline">Esqueci minha senha</p>
                        </Link>

                        <Link href='/register'>
                            <p className="font-light text-sm underline">Criar conta</p>
                        </Link>
                    </div>

                    <button className="bg-green-blue rounded-lg px-4 py-2 text-xl text-white shadow-md">ENTRAR</button>
                </form>
            </div>
        </div>
    )
  }
  