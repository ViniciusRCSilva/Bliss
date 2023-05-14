import UseAuth from "@/hook/useAuth"
import { Eye } from "@phosphor-icons/react"

export function TextsDiary() {
    const { user } = UseAuth()

    return(
        <>        
            <div className="flex flex-col w-full h-[50vh] overflow-y-auto gap-5 p-2 scrollbar-thin scrollbar-track-slate-200 scrollbar-track-rounded-lg scrollbar-thumb-green-blue scrollbar-thumb-rounded-lg">
                {user.diary?.length == 0 ? (
                    <p className="font-light text-center">Você ainda não tem anotações!</p>
                ) : (
                    <>
                        {user.diary?.map((diary, i) => {
                            return(
                                <div 
                                    className="flex w-full items-center justify-between p-2 px-4 border-2 border-green-blue rounded-lg animate-screenOpacity shadow-md"
                                    key={i}
                                >
                                    <div className="flex flex-col">
                                        <p className="font-medium text-lg">{diary.createdAt}</p>
                                        <p className="text-sm font-light w-40 lg:w-80 whitespace-nowrap text-ellipsis overflow-hidden">{diary.text}</p>
                                    </div>
        
                                    <div className='hidden lg:flex items-center group gap-2 cursor-pointer'>
                                        <Eye className='text-3xl transform lg:translate-x-20 lg:group-hover:translate-x-0 transition-transform text-green-blue' />
                                        <p className='text-lg transform opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-light'>Visualizar</p>
                                    </div>
                                </div>
                            )
                        })} 
                    </>
                )}
            </div>
        </>
    )
}