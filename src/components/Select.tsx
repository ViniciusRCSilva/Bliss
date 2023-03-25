interface SelectProps{
    children: any
}

export function Select(props: SelectProps){
    return(
        <select className="p-2 border-[1px] border-green-blue shadow-md rounded-lg focus:outline-none">
            {props.children}
        </select>
    )
}