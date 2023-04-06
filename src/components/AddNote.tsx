import { Plus, PlusCircle, SmileyWink, X } from "@phosphor-icons/react";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { useState } from "react";

export function AddNote(){
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
            <div className="select-none">
                <div className="flex items-center justify-center gap-2">
                    <p className="lg:text-lg font-light">Escreva aqui como foi seu dia</p>
                    <SmileyWink className="text-3xl text-green-blue"/>
                </div>

                <div className="flex justify-center mt-10">
                    <PlusCircle onClick={handleClickOpen} weight="fill" className="text-green-blue text-5xl lg:hover:scale-110 lg:hover:rotate-180 lg:transition-all cursor-pointer" />
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <div className="flex flex-col lg:w-[30vw]">
                    <div className="flex w-full justify-end p-4 pb-0">
                        <X onClick={handleClose} weight="bold" className="text-green-blue text-2xl cursor-pointer"/>
                    </div>

                    <DialogContent>
                        <div className="flex flex-col justify-center items-start gap-10">

                            <div className="flex flex-col w-full gap-4">
                                <p className="text-xl font-medium">Conte como foi seu dia:</p>

                                <textarea className="w-full h-96 bg-white text-green-dark border-[1px] p-4 border-green-blue shadow-lg pl-4 placeholder-gray focus:outline-none rounded-lg resize-none" />
                            </div>

                            <div className="flex w-full justify-between items-end">
                                <button className="flex items-center bg-green-blue rounded-lg px-4 py-2 text-xl text-white gap-2 shadow-md">
                                    Adicionar
                                    <Plus weight="bold" className="text-xl" />
                                </button>

                                <p onClick={handleClose} className="text-gray underline cursor-pointer">Cancelar</p>
                            </div>
                        </div>
                    </DialogContent>
                </div>
            </Dialog>
        </>
    )
}