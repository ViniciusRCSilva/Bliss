import { Navigate } from "@/components/Navigate"
import { Topbar } from "@/components/Topbar"

import { dayName } from "@/components/HabitPopUp"
import { Task } from "@/components/Task"
import { X } from "@phosphor-icons/react"
import Router from "next/router"
import { useEffect, useState } from "react"
import UseAuth from "@/hook/useAuth"
import { NoHabit } from "@/components/NoHabit"

export default function HabitList(){
    const [day, setDay] = useState('')
    const [noHabit, setNoHabit] = useState(true)
    const { user } = UseAuth()

    function handleDayName(){
        dayName == '' && Router.push('/habits')
    }

    useEffect(() => {
        setDay(dayName)
        setNoHabit(true)
        handleDayName()
    }, [])

    function handleNoHabit(){
        user.habit?.map(habit => {
            if(habit.day == dayName){
                return setNoHabit(false)
            }
        })
    }

    useEffect(() => {
        handleNoHabit()
    }, [user])

    return(
        <div className="animate-screenOpacity">
            <Topbar active="habits" />
            <div className="flex flex-col w-full h-screen justify-between items-center pt-16 gap-5 bg-white">
                <div className="flex flex-col w-[90%] h-full justify-center lg:w-[80%] gap-5">
                    <div className="flex justify-between items-center">
                        <p className="text-xl">{dayName}</p>

                        <div onClick={() => Router.push('/habits')} className="flex justify-center items-center text-green-blue cursor-pointer gap-1">
                            <p className="underline">Cancelar edição</p> <X className="text-2xl" />
                        </div>
                    </div>

                    <div className="flex flex-col h-[60vh] gap-5 p-2 py-5 lg:p-5 overflow-y-auto scrollbar-thin scrollbar-track-slate-200 scrollbar-track-rounded-lg scrollbar-thumb-green-blue scrollbar-thumb-rounded-lg">
                        {noHabit ? (
                            <NoHabit/>
                        ) : (
                            <>
                                {/* obs.: ordenar em ordem crescente */}
                                {user.habit?.map((habit, i) => {
                                    if(habit.day == day){
                                        return(
                                            <>
                                                <div key={habit.hour + i}>
                                                    <Task hour={habit.hour} taskName={habit.name} edit={true} day={dayName} />
                                                </div>
                                            </>
                                        )
                                    }
                                })}  
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Navigate active="habits" />
        </div>
    )
}