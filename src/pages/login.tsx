import Input from "@/components/Input";
import { EnvelopeSimple, GoogleLogo, Password } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import Logo from '../../public/logo_bliss.svg'
import LateralImage from '../../public/imagem_lateral_login.svg'
import UseAuth from "@/hook/useAuth";
import { useState } from "react";

export default function Login() {
    const { loginGoogle } = UseAuth()
	const { loginPassword } = UseAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function handleLoginSubmit() {
		if (email === '' || password === '') {
			console.log('')
		} else {
			await loginPassword(email, password)
		}
	}

    return (
        <div className="flex flex-col lg:flex-row bg-[url('../../public/bottom_bliss.svg')] bg-no-repeat bg-bottom bg-contain sm:bg-none md:justify-center justify-start pt-[4vh] md:pt-0 items-center w-full h-screen text-gray animate-screenOpacity">
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
                        <Input icon={<EnvelopeSimple/>} type="email" placeholder="Email" value={email} valueChange={setEmail} />
                        
                        <Input icon={<Password/>} type="password" placeholder="Senha" value={password} valueChange={setPassword} />
                    </div>

                    <div className="flex w-full justify-between items-center">
                        <Link href='/forgotPassword'>
                            <p className="font-light text-sm underline">Esqueci minha senha</p>
                        </Link>

                        <Link href='/register'>
                            <p className="font-light text-sm underline">Criar conta</p>
                        </Link>
                    </div>

                    <button 
                        onClick={handleLoginSubmit} 
                        className="bg-green-blue rounded-lg px-4 py-2 text-xl text-white shadow-md lg:transition-shadow lg:shadow-transparent lg:hover:shadow-md">
                            ENTRAR
                    </button>
                </form>

                <div className="flex items-center w-80 gap-2">
                    <div className="w-[50%] h-[2px] bg-gray rounded-full opacity-30" />
                    <p className="text-gray text-sm">ou</p>
                    <div className="w-[50%] h-[2px] bg-gray rounded-full opacity-30" />
                </div>

                <button onClick={loginGoogle} className="flex items-center gap-2 bg-white border-gray border-2 border-opacity-30 rounded-lg px-4 py-2 text-xl shadow-md lg:transition-shadow lg:shadow-transparent lg:hover:shadow-md">
                    <GoogleLogo className="text-green-blue text-3xl"/>
                    <p>Entrar com Google</p>
                </button>
            </div>
        </div>
    )
  }
  