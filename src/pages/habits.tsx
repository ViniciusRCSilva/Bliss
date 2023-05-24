import { HabitPopUp } from "@/components/HabitPopUp"
import { Navigate } from "@/components/Navigate"
import { Topbar } from "@/components/Topbar"

export default function Habits(){
    return(
        <div className="animate-screenOpacity">
            <Topbar active="habits" />
            <div className="flex flex-col w-full h-screen items-center bg-white">
                <div className="flex flex-col w-[80%] h-full justify-center gap-5">
                    <p className="text-xl">Meus hábitos</p>

                    <HabitPopUp/>
                </div>

            </div>
            <Navigate active='habits' />
        </div>
    )
}