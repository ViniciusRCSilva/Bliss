interface InputProps{
    type: string
    icon: any
    placeholder?: string
    disabled?: boolean
    value: any
}

export default function InputRead(props: InputProps) {
    return (
        <div className="flex w-full h-16 items-center rounded-lg border-[1px] px-4 bg-white border-green-blue shadow-md">
            <div className="flex justify-center items-center w-[20%] text-3xl pr-4 text-green-blue border-r-[1px] border-r-green-blue">
                {props.icon}
            </div>

            <input type={props.type} value={props.value ?? ''} disabled={props.disabled} placeholder={props.placeholder} required className="w-[80%] bg-white text-green-dark pl-4 placeholder-gray focus:outline-none rounded-lg disabled:opacity-60 disabled:cursor-not-allowed" />
        </div>
    )
  }
  