import Link from "next/link"

interface LinkUserProps{
    link: string
    icon: any
    linkName: string
}

export function LinkUser(props: LinkUserProps){
    return(  
        <Link href={`/${props.link}`} className="flex items-center gap-3 lg:hover:scale-105 lg:transition-transform">                
            <div className="flex justify-center items-center rounded-full w-12 h-12 text-green-blue text-3xl">
                {props.icon}
            </div>
            <p className="font-light lg:text-xl">{props.linkName}</p>
        </Link>
    )
}