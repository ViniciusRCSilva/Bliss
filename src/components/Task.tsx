import UseAuth from "@/hook/useAuth"
import { Check, Clock, Dot, PencilSimple, TrashSimple, X } from "@phosphor-icons/react"
import Router from "next/router"
import { useState } from "react"

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Image from "next/image";

import PuttingInTrash from '../../public/imagem_lixeira_habito.svg'
import InputRead from "./InputRead";
import { examplesList } from "@/utils";

interface TaskProps{
    day?: string
    hour: string
    taskName: string
    edit?: boolean
    delete?: any
}

export function Task(props: TaskProps){
    const { deleteHabit, user } = UseAuth()
    const [open, setOpen] = useState(false);
    const [option, setOption] = useState('');

    const handleClickOpen = (opt: string) => {
        setOption(opt)
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    /* erro (apaga todos os hábitos daquele dia) */
    async function handleDeleteHabit(day: string, hour: string){
        await deleteHabit(day, hour, user)
        Router.reload()
    }

    const [opacity, setOpacity] = useState('opacity-30')

    const handleOpacity = () => {
        setOpacity('opacity-100')
    }

    return(
        <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-2 font-light">
                <Dot weight="bold" className="text-2xl"/>
                <div className="flex items-center gap-2">
                    <p>{props.hour}</p>
                    -
                    <p>{props.taskName}</p>
                </div>
            </div>

            {props.edit ? (
                <>
                    <div className="flex items-center gap-4">
                        <div onClick={() => handleClickOpen('edit')} className={`flex w-9 h-9 justify-center items-center bg-yellow-300 cursor-pointer text-white rounded-lg lg:hover:opacity-90 transition-opacity`}>
                            <PencilSimple weight="bold" />
                        </div>

                        <div onClick={() => handleClickOpen('delete')} className={`flex w-9 h-9 justify-center items-center bg-red-500 cursor-pointer text-white rounded-lg lg:hover:opacity-90 transition-opacity`}>
                            <TrashSimple weight="bold" />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div onClick={handleOpacity} className={`flex w-9 h-9 justify-center items-center ${opacity} bg-green-blue  lg:hover:opacity-100 transition-opacity cursor-pointer text-white rounded-lg`}>
                        <Check weight="bold" />
                    </div>
                </>                
            )}

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <div className="flex w-full justify-end p-4 pb-0">
                    <X onClick={handleClose} weight="bold" className="text-green-blue text-2xl cursor-pointer"/>
                </div>

                <DialogContent>
                    {option == 'delete' ? (
                        <div className="flex flex-col justify-center items-center gap-4">
                            <Image src={PuttingInTrash} alt="Colocando no lixo" width={250}/>

                            <div className="flex flex-col items-center">
                                <div className="flex items-end gap-1">
                                    <p>Confirmar</p>
                                    <p className="font-semibold text-lg text-red-500">Exclusão</p>
                                </div>
                                <div className="flex items-end gap-1">
                                    <p>hábito</p>
                                    <p className="text-lg font-semibold">{props.taskName}</p>
                                </div>

                                <div className="flex items-end gap-1">
                                    <p>das</p> 
                                    <p className="text-lg font-semibold">{props.hour}?</p>
                                </div>
                            </div>

                            <div className="flex w-full justify-between items-end">
                                    <div 
                                        className="flex items-center cursor-pointer text-red-500 rounded-lg gap-2"
                                        onClick={() => handleDeleteHabit(props.day!, props.hour)}
                                    >
                                        <TrashSimple weight="bold" />
                                        <p>Excluir</p>
                                    </div>

                                <p onClick={handleClose} className="text-gray underline cursor-pointer">Cancelar</p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="flex flex-col w-full gap-4">
                                <p className="text-xl font-medium">Editando</p>
                                <p>o hábito das:</p>
                                <InputRead disabled type="time" icon={<Clock/>} value={props.hour} />

                                <p>que será:</p>

                                <input type="text" required value={props.taskName} placeholder={`Ex.: ${examplesList[Math.floor(Math.random() * examplesList.length)]}...`} className="w-full bg-white text-green-dark border-[1px] p-4 border-green-blue shadow-md pl-4 placeholder-gray focus:outline-none rounded-lg" />
                            </div>

                            <div className="flex w-full justify-between items-end">
                                <button disabled={props.taskName.length == 0} className="flex items-center bg-green-blue rounded-lg px-4 py-2 text-xl text-white gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-opacity">
                                    Editar
                                    <PencilSimple weight="bold" className="text-xl" />
                                </button>

                                <p onClick={handleClose} className="text-gray underline cursor-pointer">Cancelar</p>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

        </div>
    )
}