import { Eye, NotePencil, Plus, X } from "@phosphor-icons/react";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { useEffect, useState } from "react";
import { Select } from "./Select";

const weekDays = [
    { short: 'Dom', long: 'Domingo' },
    { short: 'Seg', long: 'Segunda' },
    { short: 'Ter', long: 'Terça' },
    { short: 'Qua', long: 'Quarta' },
    { short: 'Qui', long: 'Quinta' },
    { short: 'Sex', long: 'Sexta' },
    { short: 'Sáb', long: 'Sábado' },
]

export function Habit(){
    const [open, setOpen] = useState(false);
    const [day, setDay] = useState('');

    const handleClickOpen = (d: string) => {
        setDay(d)
        setOpen(true);
    };
    
      const handleClose = () => {
        setOpen(false);
    };

    function GenerateHourList(HourNumber: number) {
        let HourList = [];
        for (let i = 5; i < HourNumber; i++) {
          let hour = ("0" + i).slice(-2) + ":00";
          HourList.push(hour);
        }
        return HourList;
    }

    return(
        <>
            {weekDays.map((weekDay, i) => {
                return(
                    <div className="flex w-full justify-between" key={`${weekDay}-${i}`}>
                        <p className="text-2xl p-3">{weekDay.short}</p>
            
                        <div className="flex items-center justify-center border-2 border-green-blue rounded-lg gap-4 p-3">
                            <div onClick={() => handleClickOpen(weekDay.long)} className="flex items-center gap-1 cursor-pointer">
                                <Plus className="text-green-blue text-2xl" />
                                <p className="text-xl">Criar</p>
                            </div>                           
            
                            <div className="">
                                <NotePencil className="text-green-blue text-3xl" />
                            </div>
            
                            <div>
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
                            <Select>
                                {GenerateHourList(24).map((hour, i) => {
                                    return(
                                        <option key={i} value={`${hour}`}>{hour}</option>
                                    )
                                })}
                            </Select>

                            <p>vai ser:</p>

                            <input type="text" className="w-full bg-white text-green-dark border-[1px] p-4 border-green-blue shadow-lg pl-4 placeholder-gray focus:outline-none rounded-lg" />
                        </div>

                        <button className="flex items-center bg-green-blue rounded-lg px-4 py-2 text-xl text-white gap-2 shadow-md">
                            Criar
                            <Plus weight="bold" className="text-xl" />
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}