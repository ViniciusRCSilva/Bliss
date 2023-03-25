interface BgProps{
    children: any
}

export function GreenBg(props: BgProps){
    return(
        <div className="flex w-full justify-center items-center h-[45vh] bg-green-blue text-white rounded-b-lg">
          {props.children}
        </div>
    )
}