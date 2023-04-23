import { Navigate } from "@/components/Navigate"
import { Topbar } from "@/components/Topbar"

import { dayName } from "@/components/Habit"
import { Task } from "@/components/Task"
import { X } from "@phosphor-icons/react"
import Router from "next/router"

export default function HabitList(){
    return(
        <div className="animate-screenOpacity">
            <Topbar />
            <div className="flex flex-col w-full h-screen justify-evenly items-center pt-16 gap-5 bg-white">
                <div className="flex flex-col w-[90%] lg:w-[80%] gap-5">
                    <div className="flex justify-between items-center">
                        <p className="text-xl">{dayName}</p>

                        <div onClick={() => Router.push('/habits')} className="flex justify-center items-center text-green-blue cursor-pointer gap-1">
                            <p className="underline">Cancelar edição</p> <X className="text-2xl" />
                        </div>
                    </div>

                    <div className="flex flex-col h-[60vh] gap-5 p-2 py-5 lg:p-5 overflow-y-auto scrollbar-thin scrollbar-track-slate-200 scrollbar-track-rounded-lg scrollbar-thumb-green-blue scrollbar-thumb-rounded-lg">
                        <Task hour="06:00" taskName="Teste" edit={true} />
                        <Task hour="07:00" taskName="Teste" edit={true} />
                        <Task hour="08:00" taskName="Teste" edit={true} />
                        <Task hour="09:00" taskName="Teste" edit={true} />
                        <Task hour="10:00" taskName="Teste" edit={true} />
                        <Task hour="11:00" taskName="Teste" edit={true} />
                        <Task hour="12:00" taskName="Teste" edit={true} />
                        <Task hour="13:00" taskName="Teste" edit={true} />
                        <Task hour="14:00" taskName="Teste" edit={true} />
                        <Task hour="15:00" taskName="Teste" edit={true} />
                        <Task hour="16:00" taskName="Teste" edit={true} />
                        <Task hour="17:00" taskName="Teste" edit={true} />
                        <Task hour="18:00" taskName="Teste" edit={true} />
                        <Task hour="19:00" taskName="Teste" edit={true} />
                        <Task hour="20:00" taskName="Teste" edit={true} />
                        <Task hour="21:00" taskName="Teste" edit={true} />
                        <Task hour="22:00" taskName="Teste" edit={true} />
                        <Task hour="23:00" taskName="Teste" edit={true} />
                    </div>
                </div>

                <Navigate active="habits" />
            </div>
        </div>
    )
}