import { ArrowClockwise } from "@phosphor-icons/react"
import Image from "next/image"

import Logo from '../../public/logo_bliss.svg'
import UseAuth from "@/hook/useAuth"

interface LoadingProps {
	children: any
}

export function Loading(props: LoadingProps){
	const { loading } = UseAuth()

    return(
		<>		
			{loading ? (			
				<div className="h-screen w-screen flex flex-col items-center justify-center bg-white gap-5">
					<Image src={Logo} alt="Logotipo do Bliss" width={190} />
					<ArrowClockwise className="animate-spin text-3xl text-green-blue"/>
				</div>
			): props.children}
		</>
    )
}