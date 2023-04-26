import Input from "@/components/Input";
import { AppleLogo, EnvelopeSimple, FacebookLogo, GoogleLogo, Password } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import Logo from '../../public/logo_bliss.svg'
import LateralImage from '../../public/imagem_lateral_login.svg'

export default function Login() {
    return (
        <div className="fixed w-full h-[110vh] lg:h-screen">
            <div className="flex flex-col lg:flex-row bg-[url('../../public/bottom_bliss.svg')] bg-no-repeat bg-bottom bg-contain sm:bg-none md:justify-center justify-start pt-[4vh] md:pt-0 items-center w-full h-full text-gray animate-screenOpacity">
                <div className="lg:flex flex-col hidden text-white bg-green-blue w-[60%] h-full items-center justify-center gap-4 px-5">
                    <Image src={LateralImage} alt="Image lateral" width={500}/>
                    <p className="text-3xl font-medium">Seja bem-vindo(a)!</p>
                    <p className="text-xl font-light text-center">Cuide da sua mente, corpo e alma com Bliss - sua jornada pessoal de bem-estar</p>
                </div>

                <div className="flex flex-col items-center w-[80%] md:w-[40%] gap-5">
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
                            <Link href='/forgotPassword'>
                                <p className="font-light text-sm underline">Esqueci minha senha</p>
                            </Link>

                            <Link href='/register'>
                                <p className="font-light text-sm underline">Criar conta</p>
                            </Link>
                        </div>

                        <button className="bg-green-blue rounded-lg px-4 py-2 text-xl text-white shadow-md lg:transition-shadow lg:shadow-transparent lg:hover:shadow-md">ENTRAR</button>

                        <div className="flex items-center w-full gap-2">
                            <div className="w-[50%] h-[2px] bg-gray rounded-full opacity-30" />
                            <p className="text-gray text-sm">ou</p>
                            <div className="w-[50%] h-[2px] bg-gray rounded-full opacity-30" />
                        </div>

                    </form>

                    <div className="flex flex-col items-center gap-3">
                        <p>Entrar com:</p>

                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 bg-white border-gray border-2 border-opacity-30 rounded-lg px-4 py-2 text-xl shadow-md lg:transition-shadow lg:shadow-transparent lg:hover:shadow-md">
                                <GoogleLogo className="text-green-blue text-3xl"/>
                            </button>
                            <button className="flex items-center gap-2 bg-white border-gray border-2 border-opacity-30 rounded-lg px-4 py-2 text-xl shadow-md lg:transition-shadow lg:shadow-transparent lg:hover:shadow-md">
                                <FacebookLogo className="text-green-blue text-3xl"/>
                            </button>
                            <button className="flex items-center gap-2 bg-white border-gray border-2 border-opacity-30 rounded-lg px-4 py-2 text-xl shadow-md lg:transition-shadow lg:shadow-transparent lg:hover:shadow-md">
                                <AppleLogo className="text-green-blue text-3xl"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  