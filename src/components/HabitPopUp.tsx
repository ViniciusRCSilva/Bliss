import { Clock, Eye, NotePencil, Plus, X } from "@phosphor-icons/react";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { useState } from "react";
import Router from "next/router";
import Input from "./Input";
import UseAuth from "@/hook/useAuth";
import { examplesList, get_random_string } from "@/utils";

const weekDays = [
    { short: 'Dom', long: 'Domingo' },
    { short: 'Seg', long: 'Segunda' },
    { short: 'Ter', long: 'Terça' },
    { short: 'Qua', long: 'Quarta' },
    { short: 'Qui', long: 'Quinta' },
    { short: 'Sex', long: 'Sexta' },
    { short: 'Sáb', long: 'Sábado' },
]

export let dayName = ''

export function HabitPopUp(){
    const [open, setOpen] = useState(false);
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [id, setId] = useState(get_random_string(20));
    const [habitUser, setHabitUser] = useState('');
    const [block, setBlock] = useState(false)
    const { createHabit, user } = UseAuth()

    const handleVisualizeDay = (dName: string, weekDay: string) => {
        dayName = dName
        Router.push(`/habitList/habit_${weekDay}`)
    }

    const handleEditDay = (dName: string, weekDay: string) => {
        dayName = dName
        Router.push(`/habitList/edit/habit_${weekDay}`)
    }

    const handleClickOpen = (d: string) => {
        setDay(d)
        setOpen(true);
    };
    
    const handleClose = () => {
        setHour('')
        setHabitUser('')
        setBlock(false)
        setOpen(false);
    };

    async function handleCreateHabit(){
        await createHabit(id, day, hour, habitUser, user)
    }

    function handleBlock(){
        user.habit?.map(habit => {
            {habit.day == day && (             
                habit.hour == hour ? (                     
                    setBlock(true)
                ) : (
                    setBlock(false)
                )
            )}
        })
    }

    return(
        <>
            {weekDays.map((weekDay, i) => {
                return(
                    <div className="flex w-full justify-between items-center" key={`${weekDay}-${i}`}>
                        <p className="hidden lg:flex text-xl p-3">{weekDay.long}</p>
                        <p className="flex lg:hidden text-xl p-3">{weekDay.short}</p>
            
                        <div className="flex items-center justify-center border-2 border-green-blue rounded-lg p-2">
                            <div onClick={() => handleClickOpen(weekDay.long)} className="flex items-center gap-1 cursor-pointer pr-3 border-r-2 border-green-blue">
                                <Plus className="text-green-blue text-xl lg:text-2xl" />
                                <p className="text-md lg:text-xl">Criar</p>
                            </div>                    
            
                            <div onClick={() => handleEditDay(weekDay.long, weekDay.long)} className="flex items-center justify-center px-3 border-r-2 border-green-blue cursor-pointer">
                                <NotePencil className="text-green-blue text-3xl" />
                            </div>

                            <div onClick={() => handleVisualizeDay(weekDay.long, weekDay.long)} className="flex items-center justify-center pl-3 cursor-pointer">
                                <Eye className="text-green-blue text-3xl" />
                            </div>
                        </div>
                    </div>
                )
            })}

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <div className="flex w-full justify-end p-4 pb-0">
                    <X onClick={handleClose} weight="bold" className="text-green-blue text-2xl cursor-pointer"/>
                </div>

                <DialogContent>
                    <div onMouseMove={handleBlock} onTouchStart={handleBlock} onTouchEnd={handleBlock} className="flex flex-col justify-center items-start gap-4">

                        <div className="flex flex-col w-full gap-4">
                            <p className="text-xl font-medium">{day},</p>

                            <p>meu novo hábito das:</p>
                            <Input type="time" icon={<Clock/>} value={hour} valueChange={setHour} />

                            <p>vai ser:</p>

                            <input type="text" required value={habitUser} onChange={e => setHabitUser(e.target.value)} placeholder={`Ex.: ${examplesList[Math.floor(Math.random() * examplesList.length)]}...`} className="w-full bg-white text-green-dark border-[1px] p-4 border-green-blue shadow-md pl-4 placeholder-gray focus:outline-none rounded-lg" />
                        </div>

                        {block ? (
                            <p className="text-red-500 underline text-sm animate-screenOpacity">Já existe um hábito nesse horário!</p>
                        ): (
                            <></>
                        )}

                        <div className="flex w-full justify-between items-end">
                            {block ? (
                                <button onClick={handleCreateHabit} disabled className="flex items-center bg-green-blue rounded-lg px-4 py-2 text-xl text-white gap-2 shadow-md opacity-50 cursor-not-allowed">
                                    Criar
                                    <Plus weight="bold" className="text-xl" />
                                </button>
                            ) : (
                                <button onClick={handleCreateHabit} disabled={hour.length == 0 || habitUser.length == 0} className="flex items-center bg-green-blue rounded-lg px-4 py-2 text-xl text-white gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-opacity">
                                    Criar
                                    <Plus weight="bold" className="text-xl" />
                                </button>
                            )}

                            <p onClick={handleClose} className="text-gray underline cursor-pointer">Cancelar</p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}