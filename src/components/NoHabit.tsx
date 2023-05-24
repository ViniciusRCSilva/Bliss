import Image from "next/image";

import NoHabits from '../../public/imagem_habitos.svg'

export function NoHabit(){
    return(
        <div className="flex flex-col w-full h-full justify-center items-center gap-5">
            <Image src={NoHabits} alt="Imagem sem hábitos" width={500} className="hidden lg:flex" />
            <Image src={NoHabits} alt="Imagem sem hábitos" width={200} className="flex lg:hidden" />
            <p className="font-light text-green-blue lg:text-xl">Você ainda não tem hábitos esse dia.</p>
        </div>
    )
}