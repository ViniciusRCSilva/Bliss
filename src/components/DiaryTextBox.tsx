import UseAuth from "@/hook/useAuth"
import { CaretDown, CaretUp, TrashSimple } from "@phosphor-icons/react"
import Router from "next/router"
import { useState } from "react"

interface textBoxProps{
    createdAt: string
    text: string
}

export function TextBox(props: textBoxProps){
    const { user, deleteTextDiary } = UseAuth()
    const [isOpen, setIsOpen] = useState(false)
    const [deleteConfirm, setDeleteConfirm] = useState(false)

    async function handleDeleteText(date: string){
        await deleteTextDiary(date ,user)
        Router.reload()
    }

    return(
        <>  
            {isOpen == false ? (
                <>                                            
                        <div className="flex flex-col">
                            <p className="font-medium text-lg">{props.createdAt}</p>
                            <p className="text-sm font-light w-40 lg:w-80 whitespace-nowrap text-ellipsis overflow-hidden">{props.text}</p>
                        </div>

                        <div className='flex items-center group gap-2 cursor-pointer animate-screenOpacity' onClick={() => setIsOpen(true)}>
                            <CaretDown className='text-3xl transform lg:translate-x-20 lg:group-hover:translate-x-0 transition-transform text-green-blue' />
                            <p className='hidden lg:flex text-lg transform opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-light'>Expandir</p>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col w-full gap-10">                                            
                        <div className="flex flex-col">
                            <p className="font-medium text-lg">{props.createdAt}</p>
                            <p className="font-light text-justify">{props.text}</p>
                        </div>

                        <div className="flex w-full items-center justify-between lg:hover:opacity-90 transition-opacity">
                            {deleteConfirm ? (
                                <div className="flex flex-col w-full gap-2">
                                    <div className="flex items-center lg:w-[30%] justify-between animate-screenOpacity">
                                        <div 
                                            className="flex items-center cursor-pointer text-red-500 underline transition-colors rounded-lg gap-2"
                                            onClick={() => handleDeleteText(props.createdAt)}
                                        >
                                            <TrashSimple weight="bold" />
                                            <p>Confirmar exclusão</p>
                                        </div>

                                        <p className="text-gray underline cursor-pointer" onClick={() => setDeleteConfirm(false)}>Cancelar</p>
                                    </div>
                                    <p className="text-red-500 font-light text-sm">*Se você excluir essa anotação, você não poderá mais recuperá-la!</p>
                                </div>
                            ): (

                                <div 
                                    className="flex items-center cursor-pointer text-red-500 rounded-lg gap-2 animate-screenOpacity"
                                    onClick={() => setDeleteConfirm(true)}
                                >
                                    <TrashSimple weight="bold" />
                                    <p>Excluir</p>
                                </div>
                            )}

                            <div className='flex items-center group gap-2 cursor-pointer animate-screenOpacity' onClick={() => setIsOpen(false)}>
                                <CaretUp className='text-3xl transform lg:translate-x-20 lg:group-hover:translate-x-0 transition-transform text-green-blue' />
                                <p className='hidden lg:flex text-lg transform opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-light'>Diminuir</p>
                            </div>
                        </div>
                    </div>
                )}                                 
            </>
    )
}