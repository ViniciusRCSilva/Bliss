interface BgProps{
    children: any
}

export function GreenBg(props: BgProps){
    return(
        <div className="flex w-full lg:w-[50%] justify-center items-center h-[45vh] lg:h-full bg-green-blue text-white rounded-b-lg lg:rounded-none">
          {props.children}
        </div>
    )
}