interface SelectProps{
    children: any
}

export function Select(props: SelectProps){
    return(
        <select className="p-2 w-full border-[1px] border-green-blue bg-white shadow-md font-light rounded-lg focus:outline-none">
            {props.children}
        </select>
    )
}