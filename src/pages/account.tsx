import { GreenBg } from "@/components/GreenBg";
import { Topbar } from "@/components/Topbar";
import { Baby, Check, EnvelopeSimple, Eye, Password, PencilSimple, PlusCircle, ShareFat, SignOut, Smiley, SmileyMeh, SmileySad, SmileyWink, X } from "@phosphor-icons/react";
import Image from "next/image";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import Img from '../../public/usuário.svg'
import { FormEvent, useEffect, useState } from "react";
import Input from "@/components/Input";
import { BrazilStates } from "@/components/BrazilStates";
import UseAuth from "@/hook/useAuth";
import { User } from "@/core/User";
import InputRead from "@/components/InputRead";
import { date_TO_String, getDayName, messageDayAccount, messageGreetings, setDayOfWeek } from "@/utils";
import Link from "next/link";
import { Navigate } from "@/components/Navigate";

export default function Account() {
  const [open, setOpen] = useState(false);
  const { user, setUser, updateUser, logout } = UseAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emotion, setEmotion] = useState('')
  const [emotionDate, setEmotionDate] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [habits, setHabits] = useState(false)
  const date = new Date()
  const [day, setDay] = useState('')

  const formatDate = date_TO_String(date)

  const optionList = [
    {
      id: 'sad',
    },
    {
      id: 'neutral',
    },
    {
      id: 'happy',
    },
  ]

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
  
  function handleUserEmotion(){
    user.emotion?.forEach((emotion) => {
      (emotion.date == formatDate && emotion.emotion.length != 0) && setEmotion(emotion.emotion)
    })

    user.emotion?.forEach((emotion) => {
      (emotion.date == formatDate && emotion.emotion.length != 0) && setEmotionDate(emotion.date)
    })
  }

  function setTodayHabitTrue() {
    user.habit?.map(habit => {
      console.log("habit day: " + habit.day)
      console.log("today's name: " + getDayName(date.getDay()))
      habit.day == getDayName(date.getDay()) ? setHabits(true) : setHabits(false)
      console.log("const habits: " + habits)
    })
  }

	useEffect(() => {
		setName(user.name)
    setEmail(user.email)
    setBirthdate(user.birthdate!)
    setDay(setDayOfWeek(date.toString().split(" ")[0]))

    setTodayHabitTrue()
    handleUserEmotion()
	}, [user])

  return (
    <div className="animate-screenOpacity">
      <Topbar active="account" />

      <div className="flex flex-col lg:flex-row w-full h-screen items-center pt-16 gap-10 bg-white">
        <GreenBg>
            <div className="flex flex-col w-full gap-1 lg:gap-5 items-end">
                <div onClick={handleClickOpen} className="flex items-center mr-10 cursor-pointer">                
                    <div className="flex justify-center items-center rounded-full w-10 h-10 lg:hover:w-auto gap-3 lg:hover:p-3 bg-white text-green-blue group transition-all">
                        <p className="hidden lg:group-hover:flex">Edite seu perfil</p>
                        <PencilSimple className="text-3xl" weight="bold" />
                    </div>
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
                    <div className="flex flex-col items-center gap-1 lg:gap-2 pt-5">
                      <Image src={Img} alt="Imagem Usuário" width={200} className="hidden lg:flex" />
                      <Image src={Img} alt="Imagem Usuário" width={120} className="flex lg:hidden" />

                      <div onClick={logout} className="flex items-center justify-center p-2 bg-white text-green-blue gap-2 rounded-md cursor-pointer">
                        <p>Sair</p>
                        <SignOut/>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 lg:gap-2">           
                        <p className="text-2xl lg:text-5xl font-medium">{messageGreetings(date.getHours())}, <br/>{name}!</p>
                        <p className="text-sm lg:text-2xl">{messageDayAccount(date.getDay())}</p>
                    </div>
                </div>
                
            </div>
        </GreenBg>

        <div className="flex flex-col w-full lg:w-[50%] lg:h-full justify-evenly items-center">
          <div className="flex w-full lg:h-[90%] lg:items-center justify-center">
            <div className="flex flex-col w-[80%] items-center gap-5">
                <div className="flex flex-col items-center gap-10">
                  <div className="flex flex-col items-center font-light gap-2">
                    <p className="text-xl lg:text-2xl font-medium">Como eu me sinto hoje?</p>
                    <>                            
                      {user.emotion?.length == 0 || !emotionDate ? (
                        <Link href='/' className="flex items-center gap-2">
                          <ShareFat className="text-2xl lg:text-4xl text-green-blue"/>
                          <p className="text-green-blue text-xl">Responder</p>
                        </Link>
                      ) : (
                        <Link href='/' className="flex items-center gap-2 text-xl">                  
                          {optionList.map((opt, index) => {
                            if (opt.id == emotion && emotion == 'sad') {
                              return (
                                <>
                                  <SmileySad key={index} className="text-4xl text-green-blue" />
                                  <p className="text-green-blue">Triste</p>
                                </>
                              )
                            } else if (opt.id == emotion  && emotion == 'neutral') {
                              return (
                                <>
                                  <SmileyMeh key={index} className="text-4xl text-green-blue" />
                                  <p className="text-green-blue">Neutro</p>
                                </>
                              )
                            } else if (opt.id == emotion  && emotion == 'happy') {
                              return (
                                <>
                                  <Smiley key={index} className="text-4xl text-green-blue" />
                                  <p className="text-green-blue">Feliz</p>
                                </>
                              )
                            }
                          })}
                        </Link>
                      )}
                    </>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-sm lg:text-xl font-light">
                    {habits ? (
                      <>
                        <p className="text-xl lg:text-2xl font-medium">Você tem hábitos hoje!</p>
                        <Link href='/habits' className="flex items-center gap-2">
                          <Eye className="text-2xl lg:text-4xl text-green-blue" />
                          <p className="text-green-blue text-xl">Visualizar</p>
                        </Link>
                      </>
                    ) : (
                      <>
                        <p className="text-xl lg:text-2xl font-medium">Sem hábitos hoje: </p>
                        <Link href='/habits' className="flex items-center gap-2">
                          <PlusCircle className="text-2xl lg:text-4xl text-green-blue"/>
                          <p className="text-green-blue text-xl">Criar</p>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Navigate />
    </div>
  )
}