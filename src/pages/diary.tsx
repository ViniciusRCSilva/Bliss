import { Navigate } from "@/components/Navigate";
import { Topbar } from "@/components/Topbar";
import { TextsDiary } from "@/components/TextDiary";
import UseAuth from "@/hook/useAuth";
import { PlusCircle, SmileyWink } from "@phosphor-icons/react";
import Link from "next/link";

export default function Diary(){
    const { user } = UseAuth()

    return(
        <div className="animate-screenOpacity">
            <Topbar active="diary" />
            <div className="flex flex-col w-full h-screen justify-between items-center pt-24 gap-5 bg-white">
                <div className="flex flex-col w-[90%] lg:w-[80%] h-[80%] gap-10">
                    <div className="text-xl flex gap-1.5">
                        <p>Diário de</p>
                        <p className="text-green-blue">{user.name}</p>
                    </div>

                    <div className="flex flex-col w-full gap-5">      
                        <div className="flex flex-col justify-center items-center select-none gap-10">
                            <div className="flex items-center justify-center gap-2">
                                <p className="lg:text-lg font-light">Clique e escreva como foi seu dia</p>
                                <SmileyWink className="text-3xl text-green-blue" />
                            </div>

                            <Link href='/addDiaryNote' className="flex justify-center">
                                <PlusCircle weight="fill" className="text-green-blue text-5xl lg:hover:scale-110 lg:hover:rotate-180 lg:transition-all cursor-pointer" />
                            </Link>
                        </div>

                        <p>Recorde as suas anotações!</p>

                        <TextsDiary />
                    </div>
                </div>
            </div>
            <Navigate active="diary" />
        </div>
    )
}