import { Navigate } from "@/components/Navigate";
import { TextDiary } from "@/components/TextDiary";
import { Topbar } from "@/components/Topbar";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function Diary(){
    const date = new Date()

    function getDay(d: number){
        let day = ("0" + d).slice(-2)

        return day
    }

    function getMonth(m: number){
        let month = ("0" + (m+1)).slice(-2)

        return month
    }

    return(
        <div className="animate-screenOpacity">
            <Topbar />
            <div className="flex flex-col w-full h-screen justify-evenly items-center pt-16 gap-5 bg-white">
                <div className="flex flex-col w-[80%] h-[80%] gap-10">
                    <div className="flex w-full items-center justify-between">
                        <div className="flex w-9 h-9 justify-center items-center text-white bg-green-blue rounded-full">
                            <CaretLeft weight="bold" className="text-xl"/>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <p className="font-light">Dia {getDay(date.getDate())}/{getMonth(date.getMonth())}</p>
                            <p className="text-lg">{date.getFullYear()}</p>
                        </div>

                        <div className="flex w-9 h-9 justify-center items-center text-white bg-green-blue rounded-full">
                            <CaretRight weight="bold" className="text-xl"/>
                        </div>
                    </div>

                    <TextDiary />
                </div>

                <Navigate back="Hábitos" linkBack="habits" next="Contatos de ajuda" linkNext="contacts" />
            </div>
        </div>
    )
}