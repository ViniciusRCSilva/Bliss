import { Navigate } from "@/components/Navigate";
import { AddNote } from "@/components/AddNote";
import { Topbar } from "@/components/Topbar";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState } from "react";

export default function Diary(){
    const date = new Date()
    const [day, setDay] = useState<string>(getDay(date.getDate()))
    const [month, setMonth] = useState<string>(getMonth(date.getMonth()+1))
    const [year, setYear] = useState<any>(date.getFullYear())

    let previousMonth = parseInt(month!)

    let PreviousLastDayOfMonth = new Date(year, previousMonth-1, 0).getDate()

    let AfterLastDayOfMonth = new Date(year, previousMonth, 0).getDate()

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

        if(previousDay < 1){
            setDay(getDay(PreviousLastDayOfMonth))
            
            let previousMonth = actualMonth - 1
            setMonth(getMonth(previousMonth))

            if(previousMonth <= 0){
                setMonth("12")

                setYear(date.getFullYear()-1)
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

        if(afterDay > AfterLastDayOfMonth){
            setDay('01')
            
            let afterMonth = actualMonth + 1
            setMonth(getMonth(afterMonth))

            if(afterMonth > 12){
                setMonth("01")

                setYear(date.getFullYear())
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
                            <p className="text-lg">{year}</p>
                        </div>

                        {day == getDay(date.getDate()) && month == getMonth(date.getMonth()+1) && year == date.getFullYear() ? (
                            <div className="opacity-0 w-9 h-9">
                            </div>
                        ) : (
                            <div onClick={() => getAfterDate(day, month)} className="flex animate-screenOpacity w-9 h-9 justify-center items-center text-white bg-green-blue rounded-full cursor-pointer">
                                <CaretRight weight="bold" className="text-xl"/>
                            </div>
                        )}
                    </div>

                    {day == getDay(date.getDate()) && month == getMonth(date.getMonth()+1) && year == date.getFullYear() ? (
                        <div className="animate-screenOpacity">
                            <AddNote />
                        </div>
                    ): (
                        <div className="overflow-y-auto select-none">
                            <p className="text-sm lg:text-base font-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius mauris quis leo facilisis maximus. Sed aliquam mi elit, eu varius mi facilisis a. Aliquam erat volutpat. Sed in erat non tortor laoreet pharetra in eu diam. Etiam aliquet blandit aliquam. Mauris lobortis faucibus magna, facilisis finibus est egestas eu. Maecenas et blandit lacus.
                                Vestibulum in aliquet velit, blandit rhoncus sapien. Curabitur a mauris lorem. Suspendisse vel quam ac elit sodales viverra. Curabitur rutrum nibh augue. Nam at viverra odio, vel molestie felis. Duis pellentesque, massa ac finibus euismod, ipsum libero bibendum ante, sed aliquet felis lectus quis massa. Etiam sagittis aliquet malesuada. Ut ut tellus velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed mauris est, dictum quis dapibus malesuada, gravida et mi.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius mauris quis leo facilisis maximus. Sed aliquam mi elit, eu varius mi facilisis a. Aliquam erat volutpat. Sed in erat non tortor laoreet pharetra in eu diam. Etiam aliquet blandit aliquam. Mauris lobortis faucibus magna, facilisis finibus est egestas eu. Maecenas et blandit lacus.
                                Vestibulum in aliquet velit, blandit rhoncus sapien. Curabitur a mauris lorem. Suspendisse vel quam ac elit sodales viverra. Curabitur rutrum nibh augue. Nam at viverra odio, vel molestie felis. Duis pellentesque, massa ac finibus euismod, ipsum libero bibendum ante, sed aliquet felis lectus quis massa. Etiam sagittis aliquet malesuada. Ut ut tellus velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed mauris est, dictum quis dapibus malesuada, gravida et mi.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius mauris quis leo facilisis maximus. Sed aliquam mi elit, eu varius mi facilisis a. Aliquam erat volutpat. Sed in erat non tortor laoreet pharetra in eu diam. Etiam aliquet blandit aliquam. Mauris lobortis faucibus magna, facilisis finibus est egestas eu. Maecenas et blandit lacus.
                                Vestibulum in aliquet velit, blandit rhoncus sapien. Curabitur a mauris lorem. Suspendisse vel quam ac elit sodales viverra. Curabitur rutrum nibh augue. Nam at viverra odio, vel molestie felis. Duis pellentesque, massa ac finibus euismod, ipsum libero bibendum ante, sed aliquet felis lectus quis massa. Etiam sagittis aliquet malesuada. Ut ut tellus velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed mauris est, dictum quis dapibus malesuada, gravida et mi.
                            </p>
                        </div>
                    )}
                </div>

                <Navigate back="Hábitos" linkBack="habits" next="Contatos de ajuda" linkNext="contacts" />
            </div>
        </div>
    )
}