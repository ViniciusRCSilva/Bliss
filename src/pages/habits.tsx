import { Habit } from "@/components/Habit"
import { Navigate } from "@/components/Navigate"
import { Topbar } from "@/components/Topbar"

export default function Habits(){
    return(
        <div className="animate-screenOpacity">
            <Topbar />
            <div className="flex flex-col w-full h-screen justify-evenly items-center pt-16 gap-5 bg-white">
                <div className="flex flex-col w-[80%] gap-5">
                    <p className="text-xl">Meus hábitos</p>

                    <Habit/>
                </div>

                <Navigate back="Início" linkBack="" next="Diário" linkNext="diary" />
            </div>
        </div>
    )
}