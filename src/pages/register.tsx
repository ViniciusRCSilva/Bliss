import Input from "@/components/Input";
import { Baby, EnvelopeSimple, Password, SmileyWink } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

import Logo from '../../public/logo_bliss.svg'
import LateralImage from '../../public/imagem_lateral_cadastro.svg'
import { FormEvent, useEffect, useState } from "react";
import UseAuth from "@/hook/useAuth";
import { User } from "@/core/User";

export default function Register() {
    const date = new Date

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [state, setState] = useState('')
    const [birthdate, setBirthdate] = useState(date_TO_String(date))
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(true)
    const { createUserPassword, user, submitUser } = UseAuth()

    function getFormat(n: number){
        let number = ("0" + n).slice(-2)
        return number
    }

    function date_TO_String(date_Object: Date){
        var date_String = 
        date_Object.getFullYear() + "-" + getFormat((date_Object.getMonth() + 1)) + "-" + getFormat(date_Object.getDate())
            
        return date_String;
    }

    async function handleCreateSubmit(e: FormEvent) {
        e.preventDefault()

        if (name !== '' && birthdate !== undefined) {
            if (visible && password !== '') {
                if (password.length >= 6) {
                    await createUserPassword(name, state, email, password, birthdate)
                } else {
                    alert('Senha precisa ter mais de 6 caracteres!')
                }
            } else{
                const userCreated = new User({
                    name: user.name,
                    email: user.email,
                    birthdate,
                    state: user.state ?? ''
                })

                await submitUser(userCreated)
                Router.push('/')
            }
        } else {
            alert('Dados não completos')
        }
    }

    useEffect(() => {
        if (user.name.length !== 0 && user.email.length !== 0) {
            setEmail(user.email)
            setName(user.name)

            setVisible(false)
        }

        console.log(birthdate)
    }, [user])

    return (
        <div className="flex flex-col lg:flex-row bg-[url('../../public/bottom_bliss.svg')] bg-no-repeat bg-bottom bg-contain sm:bg-none md:justify-center justify-start pt-[4vh] md:pt-0 items-center w-full h-screen text-gray animate-screenOpacity">
            <div className="lg:flex flex-col hidden text-white bg-green-blue w-[60%] h-full items-center justify-center gap-4 px-5">
                <Image src={LateralImage} alt="Image lateral" width={500} />
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
                        <Input icon={<SmileyWink />} type="text" placeholder="Nome" value={name} valueChange={setName} />

                        <Input icon={<EnvelopeSimple />} type="email" placeholder="Email" value={email} valueChange={setEmail} />

                        <div className="flex flex-col">
                            <p>Data de nascimento</p>
                            <Input icon={<Baby />} type="date" value={birthdate} valueChange={setBirthdate} />
                        </div>

                        {visible && (
                            <Input icon={<Password />} type="password" placeholder="Senha" value={password} valueChange={setPassword} />
                        )}
                    </div>

                    {visible && (
                        <Link href='/login'>
                            <p className="font-light text-sm underline">Já tenho uma conta!</p>
                        </Link>
                    )}


                    <div onClick={handleCreateSubmit} className="bg-green-blue rounded-lg px-4 py-2 text-xl text-white shadow-md lg:cursor-pointer lg:transition-shadow lg:shadow-transparent lg:hover:shadow-md">CADASTRAR</div>
                </form>
            </div>
        </div>
    )
}
