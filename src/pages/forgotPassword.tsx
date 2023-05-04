import Input from "@/components/Input";
import { EnvelopeSimple } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import Logo from '../../public/logo_bliss.svg'
import LateralImage from '../../public/imagem_lateral_esqueceuSenha.svg'
import UseAuth from "@/hook/useAuth";
import { useState } from "react";

export default function forgotPassword(){
    const { sendPasswordResetToEmail } = UseAuth()
    const [email, setEmail] = useState('')

    async function handleEmailInput(){
        if(email !== ''){
            await sendPasswordResetToEmail(email)
        }else{
            alert('Email não encontrado')
        }
    }

    return(
        <div className="flex flex-col lg:flex-row bg-[url('../../public/bottom_bliss.svg')] bg-no-repeat bg-bottom bg-contain sm:bg-none md:justify-center justify-start pt-[4vh] md:pt-0 items-center w-full h-screen text-gray animate-screenOpacity">
            <div className="lg:flex flex-col hidden text-white bg-green-blue w-[60%] h-full items-center justify-center gap-4 px-5">
                <Image src={LateralImage} alt="Image lateral" width={400}/>
                <p className="text-3xl font-medium">Esqueceu sua senha?</p>
                <p className="text-xl text-center font-light">Não se preocupe se esqueceu sua senha! Ao inserir seu email, você receberá na caixa de mensagens um link que o redirecionará para a página de alteração de senha. É fácil e simples!</p>
            </div>

            <div className="flex flex-col justify-center items-center w-[80%] md:w-[40%] gap-10">
                <div>
                    <Image src={Logo} alt="Logotipo do Bliss" width={190} />
                </div>

                <form className="flex flex-col justify-center items-center gap-5">
                    <p className="lg:hidden flex font-light text-xl">ESQUECI MINHA SENHA!</p>

                    <div className="flex flex-col gap-5">
                        <div>
                            <p className="hidden lg:flex">Insira seu Email:</p>
                            <Input icon={<EnvelopeSimple/>} type="email" placeholder="Email" value={email} valueChange={setEmail} />
                        </div>

                        <p className="lg:hidden flex text-green-blue text-sm">* Ao inserir seu email, você receberá na caixa de mensagens um link que o redirecionará para a página de alteração de senha. É fácil e simples!</p>
                    </div>

                    <Link href='/login'>
                        <p className="font-light text-sm underline">Voltar</p>
                    </Link>

                    <button onClick={handleEmailInput} className="bg-green-blue rounded-lg px-4 py-2 text-xl text-white shadow-md">ENVIAR</button>
                </form>
            </div>
        </div>
    )
}