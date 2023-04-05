import { Navigate } from "@/components/Navigate";
import { TextDiary } from "@/components/TextDiary";
import { Topbar } from "@/components/Topbar";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function Diary(){
    const date = new Date()
    const [day, setDay] = useState<string>()
    const [month, setMonth] = useState<string>()

    let lastDayOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()

    function getDay(d: number){
        let day = ("0" + d).slice(-2)
        return day
    }

    function getMonth(m: number){
        let month = ("0" + (m+1)).slice(-2)
        return month
    }

    function getPreviousDay(d: string){
        let day = d
        let today = parseInt(day)
        let previousDay = today - 1
        if(previousDay <= 0){
            return setDay(getDay(lastDayOfMonth))
        }else{
            return setDay(getDay(previousDay))
        }
    }

    function getAfterDay(d: string){
        let day = d
        let today = parseInt(day)
        let afterDay = today + 1
        if(afterDay >= lastDayOfMonth){
            return setDay('01')
        }else{
            return setDay(getDay(afterDay))
        }
    }

    useEffect(() => {
        setDay(getDay(date.getDate()))
        setMonth(getMonth(date.getMonth()))
    }, [])

    return(
        <div className="animate-screenOpacity">
            <Topbar />
            <div className="flex flex-col w-full h-screen justify-evenly items-center pt-16 gap-5 bg-white">
                <div className="flex flex-col w-[80%] h-[80%] gap-10">
                    <div className="flex w-full items-center justify-between">
                        <div onClick={() => getPreviousDay(day!)} className="flex w-9 h-9 justify-center items-center text-white bg-green-blue rounded-full cursor-pointer">
                            <CaretLeft weight="bold" className="text-xl"/>
                        </div>

                        <div className="flex flex-col justify-center items-center select-none">
                            {/* <input 
                                type="date"
                                defaultValue={`${date.getFullYear()}-${getMonth(date.getMonth())}-${day}`}
                                max={`${date.getFullYear()}-${getMonth(date.getMonth())}-${day}`}
                                className="font-light border-2 border-green-blue p-2 rounded-md focus:outline-none"
                            /> */}
                            <p className="font-light">Dia {day}/{getMonth(date.getMonth())}</p>
                            <p className="text-lg">{date.getFullYear()}</p>
                        </div>

                        {day == getDay(date.getDate()) && month == getMonth(date.getMonth()) ? (
                            <div className="opacity-0 w-9 h-9">
                            </div>
                        ) : (
                            <div onClick={() => getAfterDay(day!)} className="flex animate-screenOpacity w-9 h-9 justify-center items-center text-white bg-green-blue rounded-full cursor-pointer">
                                <CaretRight weight="bold" className="text-xl"/>
                            </div>
                        )}
                    </div>

                    <TextDiary />
                </div>

                <Navigate back="Hábitos" linkBack="habits" next="Contatos de ajuda" linkNext="contacts" />
            </div>
        </div>
    )
}