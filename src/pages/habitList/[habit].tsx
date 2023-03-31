import { Navigate } from "@/components/Navigate"
import { Topbar } from "@/components/Topbar"

import { dayName } from "@/components/Habit"
import { Task } from "@/components/Task"

export default function HabitList(){
    return(
        <div className="animate-screenOpacity">
            <Topbar />
            <div className="flex flex-col w-full h-screen justify-evenly items-center pt-16 gap-5 bg-white">
                <div className="flex flex-col w-[90%] lg:w-[80%] gap-5">
                    <p className="text-xl">{dayName}</p>

                    <div className="flex flex-col h-[60vh] gap-5 p-2 py-5 lg:p-5 overflow-y-auto scrollbar-thin scrollbar-track-slate-200 scrollbar-track-rounded-lg scrollbar-thumb-green-blue scrollbar-thumb-rounded-lg">
                        <Task hour="06:00" taskName="Teste" />
                        <Task hour="07:00" taskName="Teste" />
                        <Task hour="08:00" taskName="Teste" />
                        <Task hour="09:00" taskName="Teste" />
                        <Task hour="10:00" taskName="Teste" />
                        <Task hour="11:00" taskName="Teste" />
                        <Task hour="12:00" taskName="Teste" />
                        <Task hour="13:00" taskName="Teste" />
                        <Task hour="14:00" taskName="Teste" />
                        <Task hour="15:00" taskName="Teste" />
                        <Task hour="16:00" taskName="Teste" />
                        <Task hour="17:00" taskName="Teste" />
                        <Task hour="18:00" taskName="Teste" />
                        <Task hour="19:00" taskName="Teste" />
                        <Task hour="20:00" taskName="Teste" />
                        <Task hour="21:00" taskName="Teste" />
                        <Task hour="22:00" taskName="Teste" />
                        <Task hour="23:00" taskName="Teste" />
                    </div>
                </div>

                <Navigate back="Voltar" linkBack="habits" visible="hidden" />
            </div>
        </div>
    )
}