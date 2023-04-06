import { Navigate } from "@/components/Navigate";
import { TextDiary } from "@/components/TextDiary";
import { Topbar } from "@/components/Topbar";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState } from "react";

export default function Diary(){
    const date = new Date()
    const [day, setDay] = useState<string>(getDay(date.getDate()))
    const [month, setMonth] = useState<any>(getMonth(date.getMonth()+1))

    let previousMonth = parseInt(month!)

    let lastDayOfMonth = new Date(date.getFullYear(), previousMonth-1, 0).getDate()

    function getDay(d: number){
        let day = ("0" + d).slice(-2)
        return day
    }

    function getMonth(m: number){
        let month = ("0" + m).slice(-2)
        return month
    }

    function getPreviousDate(d: string, m: string){
        let day = d
        let month = m

        let today = parseInt(day)
        let actualMonth = parseInt(month)

        let previousDay = today - 1

        if(previousDay <= 0){
            setDay(getDay(lastDayOfMonth))
            
            let previousMonth = actualMonth - 1
            setMonth(getMonth(previousMonth))

            if(previousMonth <= 0){
                setMonth("12")
            }
        }else{
            setDay(getDay(previousDay))
        }
    }

    function getAfterDate(d: string, m: string){
        let day = d
        let month = m

        let today = parseInt(day)
        let actualMonth = parseInt(month)

        let afterDay = today + 1

        console.log('after day: '+ (afterDay-1) + ' last day of month: '+ lastDayOfMonth)

        if(afterDay-1 >= lastDayOfMonth){
            setDay('01')
            
            let afterMonth = actualMonth + 1
            setMonth(getMonth(afterMonth))

            if(afterMonth > 12){
                setMonth("01")
            }
        }else{
            setDay(getDay(afterDay))
        }
    }

    return(
        <div className="animate-screenOpacity">
            <Topbar />
            <div className="flex flex-col w-full h-screen justify-evenly items-center pt-16 gap-5 bg-white">
                <div className="flex flex-col w-[80%] h-[80%] gap-10">
                    <div className="flex w-full items-center justify-between">
                        <div onClick={() => getPreviousDate(day, month)} className="flex w-9 h-9 justify-center items-center text-white bg-green-blue rounded-full cursor-pointer">
                            <CaretLeft weight="bold" className="text-xl"/>
                        </div>

                        <div className="flex flex-col justify-center items-center select-none">
                            <p className="font-light">Dia {day}/{month}</p>
                            <p className="text-lg">{date.getFullYear()}</p>
                        </div>

                        {day == getDay(date.getDate()) && month == getMonth(date.getMonth()+1) ? (
                            <div className="opacity-0 w-9 h-9">
                            </div>
                        ) : (
                            <div onClick={() => getAfterDate(day, month)} className="flex animate-screenOpacity w-9 h-9 justify-center items-center text-white bg-green-blue rounded-full cursor-pointer">
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