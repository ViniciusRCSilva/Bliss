import { Check, Dot, PencilSimple, TrashSimple } from "@phosphor-icons/react"
import { useState } from "react"

interface TaskProps{
    hour: string
    taskName: string
    edit?: boolean
}

export function Task(props: TaskProps){
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

            {props.edit === true ? (
                <>
                    <div onClick={handleOpacity} className={`hidden w-9 h-9 justify-center items-center ${opacity} bg-green-blue  lg:hover:opacity-100 transition-opacity cursor-pointer text-white rounded-lg`}>
                        <Check weight="bold" />
                    </div>

                    <div className="flex items-center gap-4">
                        <div className={`flex w-9 h-9 justify-center items-center bg-yellow-300 cursor-pointer text-white rounded-lg`}>
                            <PencilSimple weight="bold" />
                        </div>

                        <div className={`flex w-9 h-9 justify-center items-center bg-red-600 cursor-pointer text-white rounded-lg`}>
                            <TrashSimple weight="bold" />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div onClick={handleOpacity} className={`flex w-9 h-9 justify-center items-center ${opacity} bg-green-blue  lg:hover:opacity-100 transition-opacity cursor-pointer text-white rounded-lg`}>
                        <Check weight="bold" />
                    </div>

                    <div className="hidden items-center gap-4">
                        <div className={`flex w-9 h-9 justify-center items-center bg-yellow-300 cursor-pointer text-white rounded-lg`}>
                            <PencilSimple weight="bold" />
                        </div>

                        <div className={`hidden w-9 h-9 justify-center items-center bg-red-600 cursor-pointer text-white rounded-lg`}>
                            <TrashSimple weight="bold" />
                        </div>
                    </div>
                </>                
            )}

        </div>
    )
}