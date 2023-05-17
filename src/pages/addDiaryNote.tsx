import { Navigate } from "@/components/Navigate";
import { Topbar } from "@/components/Topbar";
import UseAuth from "@/hook/useAuth";
import { date_TO_String } from "@/utils";
import { getFormat } from "@/utils";
import { Plus } from "@phosphor-icons/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import Imagem from '../../public/imagem_diario.svg'
import Image from "next/image";

export default function AddDiaryNote(){
    const date = new Date()
    const [day, setDay] = useState<string>(getFormat(date.getDate()))
    const [month, setMonth] = useState<string>(getFormat(date.getMonth()+1))
    const [year, setYear] = useState<any>(date.getFullYear())
    const [text, setText] = useState('')
    const [isBlocked, setIsBlocked] = useState(false)
    const {createTextDiary, user} = UseAuth()

    const formatDate = date_TO_String(date)

    const handleSubmitText = async () => {
        await createTextDiary(text, user)

        Router.push('/diary')
    }

    useEffect(() => {
        setDay(getFormat(date.getDate()))
        setMonth(getFormat(date.getMonth()+1))
        setYear(date.getFullYear())
    }, [])

    function handleBlockUserPost(){
        user.diary?.forEach((diary) => {
            (diary.createdAt == formatDate && diary.text.length != 0) && setIsBlocked(true)
        })
    }

    useEffect(() => {
        handleBlockUserPost()
    }, [user])

    return(
        <div className="animate-screenOpacity">
            <Topbar active="diary" />
            <div className="flex flex-col w-full h-screen justify-between items-center pt-24 gap-5 bg-white">
                <div className="flex flex-col w-[80%] h-[80%] gap-10">
                    <div className="flex flex-col justify-center items-center select-none">
                        <p className="font-light">Dia {day}/{month}</p>
                        <p className="text-lg">{year}</p>
                    </div>

                    {isBlocked ? (
                        <div className="flex flex-col w-full h-full items-center justify-center gap-2">
                            <Image src={Imagem} alt="Homem com celular" width={350} />
                            <p className="text-green-blue font-light">Você já tem anotação no dia de hoje!</p>
                            <p className="text-gray underline cursor-pointer" onClick={() => Router.push('/diary')}>Voltar</p>
                        </div>
                    ) : (       
                        <>
                            <div className="flex flex-col justify-center items-start gap-10">

                                <div className="flex flex-col w-full gap-4">
                                    <p className="text-xl font-medium">Conte como foi seu dia:</p>

                                    <textarea onChange={(e) => setText(e.target.value)} required maxLength={1000} className="w-full h-96 bg-white text-green-dark border-[1px] p-4 border-green-blue shadow-lg pl-4 placeholder-gray focus:outline-none rounded-lg resize-none" />
                                    <p className="text-gray font-light">Limite de caracteres: {1000 - text.length}</p>
                                </div>

                                <div className="flex w-full justify-between items-end mb-20">
                                    <button onClick={handleSubmitText} className="flex items-center bg-green-blue rounded-lg px-4 py-2 text-xl text-white gap-2 shadow-md">
                                        Adicionar
                                        <Plus weight="bold" className="text-xl" />
                                    </button>

                                    <p className="text-gray underline cursor-pointer" onClick={() => Router.push('/diary')}>Cancelar</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Navigate active="diary" />
        </div>
    )
}