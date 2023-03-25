interface InputProps{
    type: string
    icon: any
    placeholder?: string
}

export default function Input(props: InputProps) {
    return (
        <div className="flex w-full items-center rounded-lg border-[1px] bg-white border-green-blue shadow-md">
            <div className="flex justify-center items-center w-[20%] text-2xl text-green-blue p-4 border-r-[1px] border-r-green-blue rounded-full">
                {props.icon}
            </div>

            <input type={props.type}  placeholder={props.placeholder} className="w-[80%] text-green-dark p-4 placeholder-gray focus:outline-none rounded-lg" />
        </div>
    )
  }
  