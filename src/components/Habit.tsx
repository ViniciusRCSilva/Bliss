import { Eye, NotePencil, Plus } from "@phosphor-icons/react";

const weekDays = [
    'D',
    'S',
    'T',
    'Q',
    'Q',
    'S',
    'S'
]

export function Habit(){
    return(
        <>
            {weekDays.map((weekDay, i) => {
                return(
                    <div className="flex w-full justify-between" key={`${weekDay}-${i}`}>
                        <p className="text-3xl p-3">{weekDay}</p>
            
                        <div className="flex items-center justify-center border-2 border-green-blue rounded-lg gap-4 p-3">
                            <div className="flex items-center gap-1">
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
        </>
    )
}