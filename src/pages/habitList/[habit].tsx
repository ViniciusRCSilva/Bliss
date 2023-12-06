import { Navigate } from "@/components/Navigate"
import { Topbar } from "@/components/Topbar"

import { dayName } from "@/components/HabitPopUp"
import { Task } from "@/components/Task"
import { CaretLeft, NotePencil } from "@phosphor-icons/react"
import Router from "next/router"
import { useEffect, useState } from "react"
import UseAuth from "@/hook/useAuth"
import { NoHabit } from "@/components/NoHabit"
import Link from "next/link"

export default function HabitList(){
    const [day, setDay] = useState('')
    const [noHabit, setNoHabit] = useState(true)
    const { user } = UseAuth()

    const compareFn = (a: any, b: any):number => {
        const val1 = a
        const val2 = b
        const order = 1

        const valb = val2 as string;
        const result = val1.localeCompare(valb);
        return result * order;
    }

    function handleDayName(){
        dayName == '' && Router.push('/habits')
    }

    const handleEditDay = (weekDay: string) => {
        Router.push(`/habitList/edit/habit_${weekDay}`)
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
        /* console.log('Horário dos hábitos asc: ' + user.habit?.map(habit => habit.day == dayName ? habit.hour : null).sort(compareFn)); */
    }, [user])

    return(
        <div className="animate-screenOpacity">
            <Topbar active="habits" />
            <div className="flex flex-col w-full h-screen justify-between items-center pt-16 gap-5 bg-white">
                <div className="flex flex-col w-[90%] h-full justify-center lg:w-[80%] gap-5">
                    <div className="flex justify-evenly lg:justify-between items-center">
                        <Link href='/habits' className="flex items-center text-gray">
                            <CaretLeft className="text-sm" weight="bold"/>
                            <p className="underline">
                                Voltar
                            </p>
                        </Link>

                        <p className="text-xl">{dayName}</p>

                        <div onClick={() => handleEditDay(dayName)} className="flex justify-center items-center w-10 h-10 border-2 border-green-blue rounded-lg cursor-pointer">
                            <NotePencil className="text-3xl text-green-blue" />
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
                                                <div key={habit.id}>
                                                    <Task id={habit.id} hour={habit.hour} taskName={habit.name} day={habit.day} />
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