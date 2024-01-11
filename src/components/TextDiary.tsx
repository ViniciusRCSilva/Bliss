import UseAuth from "@/hook/useAuth"
import { TextBox } from "./DiaryTextBox"

export function TextsDiary() {
    const { user } = UseAuth()

    return(
        <>        
            <div className="flex flex-col w-full h-[50vh] overflow-y-auto gap-5 p-2 scrollbar-thin scrollbar-track-slate-200 scrollbar-track-rounded-lg scrollbar-thumb-green-blue scrollbar-thumb-rounded-lg mb-20">
                {user.diary?.length == 0 ? (
                    <p className="font-light text-center text-green-blue">Você ainda não tem anotações!</p>
                ) : (
                    <>
                        {user.diary?.map((diary, i) => {
                            return(
                                <div 
                                    className="flex w-full items-center justify-between p-2 px-4 border-2 border-green-blue rounded-lg animate-screenOpacity"
                                    key={i}
                                >
                                    <TextBox createdAt={diary.createdAt} text={diary.text} />
                                </div>
                            )
                        })} 
                    </>
                )}
            </div>
        </>
    )
}