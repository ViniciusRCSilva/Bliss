import { MapPin, PhoneCall } from "@phosphor-icons/react";

export function ContactBox(){
    return(
    <div className="flex flex-col w-full items-start border-2 border-green-blue rounded-lg p-4 gap-2">
        <p className="font-medium text-lg">Nome</p>
        
        <div className="flex flex-col pl-4 font-light gap-2">
          
          <div className="flex items-center gap-1">
            <MapPin className="text-2xl text-green-blue"/>
            <p>Local - CEP</p>
          </div>

          <div className="flex items-center gap-1">
            <PhoneCall className="text-2xl text-green-blue"/>
            <p>DDD + Número</p>
          </div>

        </div>
    </div>
    )
}