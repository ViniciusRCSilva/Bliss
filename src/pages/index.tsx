'use client'

import { GreenBg } from "@/components/GreenBg";
import { HappyAnswer } from "@/components/HappyAnswer";
import { Navigate } from "@/components/Navigate";
import { NeutralAnswer } from "@/components/NeutralAnswer";
import { SadAnswer } from "@/components/SadAnswer";
import { Topbar } from "@/components/Topbar";
import { Smiley, SmileyMeh, SmileySad } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import frases  from '@/utils/frases_motivacionais.json'

import Img from '../../public/frase_do_dia.svg'
import UseAuth from "@/hook/useAuth";
import { date_TO_String } from "@/utils";

interface VisibleProps {
  id: 'sad' | 'neutral' | 'happy'
  visible: boolean
  color?: string
  disable: boolean
  message: any
}

export default function Home() {
  const optionList: VisibleProps[] = [
    {
      id: 'sad',
      visible: false,
      message: <SadAnswer />,
      disable: false
    },
    {
      id: 'neutral',
      visible: false,
      message: <NeutralAnswer />,
      disable: false
    },
    {
      id: 'happy',
      visible: false,
      message: <HappyAnswer />,
      disable: false
    },
  ]

  const { user, emotionUser } = UseAuth()
  const [visible, setVisible] = useState<VisibleProps>()
  const [todayPhrase, setTodayPhrase] = useState('')
  const [isBlocked, setIsBlocked] = useState(false)
  const [emotion, setEmotion] = useState('')
  const date = new Date

  const formatDate = date_TO_String(date)

  async function handleUserEmotion(index: number, emotion: string) {
    setVisible({ ...optionList[index], visible: true, color: 'text-green-blue transition-colors', disable: true })
    await emotionUser(emotion, user)
  }

  function handleChangePhrase(){
    switch(date.getDay()){
      case 0:
        setTodayPhrase(frases.domingo[date.getDate()])
        break;
      case 1:
        setTodayPhrase(frases.segunda[date.getDate()])
        break;
      case 2:
        setTodayPhrase(frases.terca[date.getDate()])
        break;
      case 3:
        setTodayPhrase(frases.quarta[date.getDate()])
        break;
      case 4:
        setTodayPhrase(frases.quinta[date.getDate()])
        break;
      case 5:
        setTodayPhrase(frases.sexta[date.getDate()])
        break;
      case 6:
        setTodayPhrase(frases.sabado[date.getDate()])
        break;
      default:
        setTodayPhrase('Não foi possível capturar a frase do dia')
    }
  }

  function handleBlockUserPost(){
    user.emotion?.forEach((emotion) => {
      (emotion.date == formatDate && emotion.emotion.length != 0) && setIsBlocked(true)
    })

    user.emotion?.forEach((emotion) => {
      (emotion.date == formatDate && emotion.emotion.length != 0) && setEmotion(emotion.emotion)
    })
  }

  useEffect(() => {
    handleChangePhrase()
  }, [])

  useEffect(() => {
    handleBlockUserPost()
  }, [user])

  return (
    <div className="animate-screenOpacity">
      <Topbar active="house" />

      <div className="flex flex-col lg:flex-row w-full h-screen justify-between items-center pt-16 gap-5 bg-white">
        <GreenBg>
          <div className="flex flex-col w-[80%] justify-center items-center gap-3 py-4">
            <p className="font-medium text-xl lg:text-4xl">Frase do dia</p>
            <Image src={Img} alt="Imagem frase do dia" width={300} className="hidden lg:flex" />
            <Image src={Img} alt="Imagem frase do dia" width={160} className="flex lg:hidden" />
            <p className="text-center text-sm lg:text-2xl lg:font-light">"{todayPhrase}"</p>
          </div>
        </GreenBg>

        <div className="flex flex-col w-full lg:w-[50%] lg:h-full justify-evenly items-center">
          <div className="flex w-full h-[45.5vh] lg:h-[90%] lg:items-center justify-center">
            <div className="flex flex-col w-[80%] items-center gap-5">
              <p className="text-xl">Como está se sentindo hoje?</p>

              <div className="flex w-full justify-evenly items-center text-2xl">
                {isBlocked ? (
                  <>                  
                  {optionList.map((opt, index) => {
                    if (opt.id == emotion && emotion == 'sad') {
                      return (
                        <div key={index} className="flex flex-col justify-center items-center gap-2">                        
                          <div className="flex items-center gap-2 animate-screenOpacity text-green-blue">
                            <SmileySad className="text-4xl lg:text-5xl" />
                            <p className="font-light">Triste</p>
                          </div>

                          <div className={`font-light text-base overflow-y-auto h-[30vh] border-2 border-green-blue rounded-lg scrollbar-thin scrollbar-track-slate-200 scrollbar-track-rounded-lg scrollbar-thumb-green-blue scrollbar-thumb-rounded-lg animate-screenOpacity`}>
                            <SadAnswer/>
                          </div>
                        </div>
                      )
                    } else if (opt.id == emotion && emotion == 'neutral') {
                      return (
                        <div key={index} className="flex flex-col justify-center items-center gap-2">                        
                          <div className="flex items-center gap-2 animate-screenOpacity text-green-blue">
                            <SmileyMeh className="text-4xl lg:text-5xl" />
                            <p className="font-light">Neutro</p>
                          </div>

                          <div className={`font-light text-base overflow-y-auto h-[30vh] border-2 border-green-blue rounded-lg scrollbar-thin scrollbar-track-slate-200 scrollbar-track-rounded-lg scrollbar-thumb-green-blue scrollbar-thumb-rounded-lg animate-screenOpacity`}>
                            <NeutralAnswer/>
                          </div>
                        </div>
                      )
                    } else if (opt.id == emotion && emotion == 'happy') {
                      return (
                        <div key={index} className="flex flex-col justify-center items-center gap-2">                        
                          <div className="flex items-center gap-2 animate-screenOpacity text-green-blue">
                            <Smiley className="text-4xl lg:text-5xl" />
                            <p className="font-light">Feliz</p>
                          </div>

                          <div className={`font-light text-base overflow-y-auto h-[30vh] border-2 border-green-blue rounded-lg scrollbar-thin scrollbar-track-slate-200 scrollbar-track-rounded-lg scrollbar-thumb-green-blue scrollbar-thumb-rounded-lg animate-screenOpacity`}>
                            <HappyAnswer/>
                          </div>
                        </div>
                      )
                    }
                  })}
                </>
                ) : (
                  <>                  
                    {optionList.map((opt, index) => {
                      if (opt.id === 'sad') {
                        return (
                          <button onClick={() => handleUserEmotion(index, opt.id)} key={index} disabled={visible?.disable}><SmileySad className={`${opt.id === visible?.id ? visible?.color : 'text-gray'} lg:hover:scale-105 lg:transition-transform text-4xl lg:text-5xl animate-screenOpacity`} /></button>
                        )
                      } else if (opt.id === 'neutral') {
                        return (
                          <button onClick={() => handleUserEmotion(index, opt.id)} key={index} disabled={visible?.disable}><SmileyMeh className={`${opt.id === visible?.id ? visible?.color : 'text-gray'} lg:hover:scale-105 lg:transition-transform text-4xl lg:text-5xl animate-screenOpacity`} /></button>
                        )
                      } else if (opt.id === 'happy') {
                        return (
                          <button onClick={() => handleUserEmotion(index, opt.id)} key={index} disabled={visible?.disable}><Smiley className={`${opt.id === visible?.id ? visible?.color : 'text-gray'} lg:hover:scale-105 lg:transition-transform text-4xl lg:text-5xl animate-screenOpacity`} /></button>
                        )
                      }
                    })}
                  </>
                  )}
              </div>

              {visible && (
                <div className={`font-light overflow-y-auto h-[20vh] lg:h-[30vh] border-2 border-green-blue rounded-lg scrollbar-thin scrollbar-track-slate-200 scrollbar-track-rounded-lg scrollbar-thumb-green-blue scrollbar-thumb-rounded-lg animate-screenOpacity`}>
                  {visible.message}
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
      <Navigate active='house' />
    </div>
  )
}