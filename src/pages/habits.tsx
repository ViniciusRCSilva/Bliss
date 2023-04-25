import { Habit } from "@/components/Habit"
import { Navigate } from "@/components/Navigate"
import { Topbar } from "@/components/Topbar"

export default function Habits(){
    return(
        <div className="animate-screenOpacity">
            <Topbar active="habits" />
            <div className="flex flex-col w-full h-screen items-center pt-16 lg:pt-0 bg-white">
                <div className="flex flex-col w-[80%] h-full justify-center gap-5">
                    <p className="text-xl">Meus hábitos</p>

                    <Habit/>
                </div>

            </div>
            <Navigate active='habits' />
        </div>
    )
}