import { GreenBg } from "@/components/GreenBg";
import { LinkUser } from "@/components/LinksUser";
import { Topbar } from "@/components/Topbar";
import { ArrowsCounterClockwise, Baby, BookBookmark, Check, EnvelopeSimple, House, Password, PencilSimple, Phone, Power, Smiley, SmileyMeh, SmileySad, SmileyWink, X } from "@phosphor-icons/react";
import Image from "next/image";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import Img from '../../public/usuário.svg'
import { FormEvent, useEffect, useState } from "react";
import Input from "@/components/Input";
import { BrazilStates } from "@/components/BrazilStates";
import Router from "next/router";
import UseAuth from "@/hook/useAuth";
import { User } from "@/core/User";
import InputRead from "@/components/InputRead";

export default function Account() {
  const [open, setOpen] = useState(false);
  const { user, setUser, updateUser, logout } = UseAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [birthdate, setBirthdate] = useState('')

  const handleClickOpen = () => {
      setOpen(true);
  };
  
  const handleClose = () => {
      setOpen(false);
      setName(user.name)
  };

	async function handleCreateSubmit(e: FormEvent) {
		e.preventDefault()
		if (name.length !== 0) {
			const newUser = new User({
				email: user.email,
				name: name ?? user.name,
				birthdate: birthdate ?? user.birthdate
			})
			await updateUser(newUser)
			setUser(newUser)
		} else {
			console.log('erro')
		}
	}

	useEffect(() => {
		setName(user.name)
    setEmail(user.email)
    setBirthdate(user.birthdate!)

    console.log(user.birthdate)
	}, [user])

  return (
    <div className="animate-screenOpacity">
      <Topbar active="account" />

      <div className="flex flex-col lg:flex-row w-full h-screen items-center pt-16 gap-5 bg-white">
        <GreenBg>
            <div className="flex flex-col w-full gap-5 items-end">
                <div onClick={handleClickOpen} className="flex items-center gap-3 mr-10 cursor-pointer">                
                    <div className="flex justify-center items-center rounded-full w-10 h-10 bg-white text-green-blue text-3xl">
                        <PencilSimple weight="bold" />
                    </div>
                    <p className="hidden lg:flex underline">Edite seu perfil</p>
                </div>

                <Dialog
                open={open}
                onClose={handleClose}
                >
                  <div className="flex flex-col lg:w-[30vw]">
                      <div className="flex w-full justify-end p-4 pb-0">
                          <X onClick={handleClose} weight="bold" className="text-green-blue text-2xl cursor-pointer"/>
                      </div>

                      <DialogContent>
                          <div className="flex flex-col justify-center items-start gap-10">

                              <div className="flex flex-col items-center justify-center w-full">
                                <div className="flex flex-col w-[80%] items-center justify-center gap-4">
                                  <div className="flex items-center gap-2">
                                    <p className="text-xl font-medium">Editando seu perfil</p>
                                    <PencilSimple className="text-2xl text-green-blue" />
                                  </div>

                                  <Input icon={<SmileyWink/>} type="text" placeholder="Nome" value={name} valueChange={setName} />
                                  <BrazilStates/>
                                  <div className="flex flex-col w-full">
                                    <p>Data de nascimento</p>
                                    <InputRead icon={<Baby/>} type="date" disabled value={birthdate} />
                                  </div>
                                  <InputRead icon={<EnvelopeSimple/>} type="email" placeholder="Email" value={email} disabled />
                                  <div className="flex flex-col w-full gap-2">
                                    <InputRead icon={<Password/>} type="password" placeholder="Senha" value="modificar_senha" disabled />
                                    <p className="text-green-blue font-light underline cursor-pointer">Solicitar troca de senha</p>
                                    <p className="text-sm text-red-600 font-light">* Após solicitar a troca de senha, será enviado um e-mail contendo um link para redirecionamento à tela de troca de senha.</p>
                                  </div>
                                </div>
                              </div>

                              <div className="flex w-full justify-between items-end">
                                  <button onClick={handleCreateSubmit} className="flex items-center bg-green-blue rounded-lg px-4 py-2 text-xl text-white gap-2 shadow-md">
                                      Salvar
                                      <Check weight="bold" className="text-xl" />
                                  </button>

                                  <p onClick={handleClose} className="text-gray underline cursor-pointer">Cancelar</p>
                              </div>
                          </div>
                      </DialogContent>
                  </div>
                </Dialog>

                <div className="flex w-full justify-center items-center gap-5">
                    <div className="hidden lg:flex flex-col items-center gap-2 pt-5">
                      <Image src={Img} alt="Imagem frase do dia" width={200} />

                      <div onClick={logout} className="flex items-center justify-center p-2 bg-white text-green-blue gap-2 rounded-md cursor-pointer">
                        <p>Sair</p>
                        <Power/>
                      </div>
                    </div>

                    <div className="flex lg:hidden flex-col items-center gap-2 pt-5">
                      <Image src={Img} alt="Imagem frase do dia" width={120} />

                      <div onClick={logout} className="flex items-center justify-center p-2 bg-white text-green-blue gap-2 rounded-md cursor-pointer">
                        <p>Sair</p>
                        <Power/>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">                
                        <p className="text-2xl lg:text-5xl">Olá, <br/>{name}!</p>
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
          <div className="flex w-full lg:h-[90%] lg:items-center justify-center">
            <div className="flex flex-col w-[80%] items-center gap-5">
              <p className="text-xl text-center lg:text-2xl">Navegue pelas outras páginas:</p>

                <div className="flex flex-col items-start gap-3">
                    <LinkUser link="" icon={<House />} linkName="Início" />
                    <LinkUser link="habits" icon={<ArrowsCounterClockwise />} linkName="Hábitos" />
                    <LinkUser link="diary" icon={<BookBookmark />} linkName="Diário" />
                    <LinkUser link="contacts" icon={<Phone />} linkName="Contatos de ajuda" />
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}