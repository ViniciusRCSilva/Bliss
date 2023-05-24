import UseAuth from "@/hook/useAuth"
import { Check, Dot, PencilSimple, TrashSimple } from "@phosphor-icons/react"
import Router from "next/router"
import { useState } from "react"

interface TaskProps{
    day?: string
    hour: string
    taskName: string
    edit?: boolean
    delete?: any
}

export function Task(props: TaskProps){
    const { deleteHabit, user } = UseAuth()

    /* erro (apaga todos os hábitos daquele dia) */
    async function handleDeleteHabit(day: string, hour: string){
        await deleteHabit(day, hour, user)
        Router.reload()
    }

    const [opacity, setOpacity] = useState('opacity-30')

    const handleOpacity = () => {
        setOpacity('opacity-100')
    }

    return(
        <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-2 font-light">
                <Dot weight="bold" className="text-2xl"/>
                <div className="flex items-center gap-2">
                    <p>{props.hour}</p>
                    -
                    <p>{props.taskName}</p>
                </div>
            </div>

            {props.edit ? (
                <>
                    <div className="flex items-center gap-4">
                        <div className={`flex w-9 h-9 justify-center items-center bg-yellow-300 cursor-pointer text-white rounded-lg lg:hover:opacity-90 transition-opacity`}>
                            <PencilSimple weight="bold" />
                        </div>

                        <div onClick={() => handleDeleteHabit(props.day!, props.hour)} className={`flex w-9 h-9 justify-center items-center bg-red-500 cursor-pointer text-white rounded-lg lg:hover:opacity-90 transition-opacity`}>
                            <TrashSimple weight="bold" />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div onClick={handleOpacity} className={`flex w-9 h-9 justify-center items-center ${opacity} bg-green-blue  lg:hover:opacity-100 transition-opacity cursor-pointer text-white rounded-lg`}>
                        <Check weight="bold" />
                    </div>
                </>                
            )}

        </div>
    )
}