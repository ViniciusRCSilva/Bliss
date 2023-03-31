import { Check, Dot } from "@phosphor-icons/react"
import { useState } from "react"

interface TaskProps{
    hour: string
    taskName: string
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

            <div onClick={handleOpacity} className={`flex w-9 h-9 justify-center items-center ${opacity} bg-green-blue  lg:hover:opacity-100 transition-opacity cursor-pointer text-white rounded-lg`}>
                <Check weight="bold" />
            </div>
        </div>
    )
}