import { Clock, Eye, NotePencil, Plus, X } from "@phosphor-icons/react";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { useState } from "react";
import Router from "next/router";
import Input from "./Input";

const weekDays = [
    { short: 'Dom', long: 'Domingo' },
    { short: 'Seg', long: 'Segunda' },
    { short: 'Ter', long: 'Terça' },
    { short: 'Qua', long: 'Quarta' },
    { short: 'Qui', long: 'Quinta' },
    { short: 'Sex', long: 'Sexta' },
    { short: 'Sáb', long: 'Sábado' },
]

const examplesList = [
    'Estudar', 
    'Comer', 
    'Dormir', 
    'Descansar', 
    'Caminhar', 
    'Exercitar', 
    'Ler', 
    'Ouvir música', 
    'Trabalhar',
]

export let dayName = ''

export function Habit(){
    const [open, setOpen] = useState(false);
    const [day, setDay] = useState('');

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
        setOpen(false);
    };

    return(
        <>
            {weekDays.map((weekDay, i) => {
                return(
                    <div className="flex w-full justify-between" key={`${weekDay}-${i}`}>
                        <p className="text-2xl p-3">{weekDay.short}</p>
            
                        <div className="flex items-center justify-center border-2 border-green-blue rounded-lg p-2">
                            <div onClick={() => handleClickOpen(weekDay.long)} className="flex items-center gap-1 cursor-pointer pr-4 border-r-2 border-green-blue">
                                <Plus className="text-green-blue text-xl lg:text-2xl" />
                                <p className="text-lg lg:text-xl">Criar</p>
                            </div>                    
            
                            <div onClick={() => handleEditDay(weekDay.long, weekDay.long)} className="flex items-center justify-center px-4 border-r-2 border-green-blue cursor-pointer">
                                <NotePencil className="text-green-blue text-3xl" />
                            </div>

                            <div onClick={() => handleVisualizeDay(weekDay.long, weekDay.long)} className="flex items-center justify-center pl-4 cursor-pointer">
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
                    <div className="flex flex-col justify-center items-start gap-4">

                        <div className="flex flex-col w-full gap-4">
                            <p className="text-xl font-medium">{day},</p>

                            <p>meu novo hábito das:</p>
                            <Input type="time" icon={<Clock/>} />

                            <p>vai ser:</p>

                            <input type="text" placeholder={`Ex.: ${examplesList[Math.floor(Math.random() * examplesList.length)]}...`} className="w-full bg-white text-green-dark border-[1px] p-4 border-green-blue shadow-lg pl-4 placeholder-gray focus:outline-none rounded-lg" />
                        </div>

                        <div className="flex w-full justify-between items-end">
                            <button className="flex items-center bg-green-blue rounded-lg px-4 py-2 text-xl text-white gap-2 shadow-md">
                                Criar
                                <Plus weight="bold" className="text-xl" />
                            </button>

                            <p onClick={handleClose} className="text-gray underline cursor-pointer">Cancelar</p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}