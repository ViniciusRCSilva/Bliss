import { PlusCircle, SmileyWink } from "@phosphor-icons/react";

export function TextDiary(){
    return(
        <>
            <div>
                <div className="flex items-center justify-center gap-2">
                    <p className="lg:text-lg font-light">Escreva aqui como foi seu dia</p>
                    <SmileyWink className="text-3xl text-green-blue"/>
                </div>

                <div className="flex justify-center mt-10">
                    <PlusCircle weight="fill" className="text-green-blue text-5xl lg:hover:scale-110 lg:transition-all cursor-pointer" />
                </div>
            </div>

            <div className="overflow-y-auto">
                {/* <p className="text-sm font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius mauris quis leo facilisis maximus. Sed aliquam mi elit, eu varius mi facilisis a. Aliquam erat volutpat. Sed in erat non tortor laoreet pharetra in eu diam. Etiam aliquet blandit aliquam. Mauris lobortis faucibus magna, facilisis finibus est egestas eu. Maecenas et blandit lacus.
                    Vestibulum in aliquet velit, blandit rhoncus sapien. Curabitur a mauris lorem. Suspendisse vel quam ac elit sodales viverra. Curabitur rutrum nibh augue. Nam at viverra odio, vel molestie felis. Duis pellentesque, massa ac finibus euismod, ipsum libero bibendum ante, sed aliquet felis lectus quis massa. Etiam sagittis aliquet malesuada. Ut ut tellus velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed mauris est, dictum quis dapibus malesuada, gravida et mi.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius mauris quis leo facilisis maximus. Sed aliquam mi elit, eu varius mi facilisis a. Aliquam erat volutpat. Sed in erat non tortor laoreet pharetra in eu diam. Etiam aliquet blandit aliquam. Mauris lobortis faucibus magna, facilisis finibus est egestas eu. Maecenas et blandit lacus.
                    Vestibulum in aliquet velit, blandit rhoncus sapien. Curabitur a mauris lorem. Suspendisse vel quam ac elit sodales viverra. Curabitur rutrum nibh augue. Nam at viverra odio, vel molestie felis. Duis pellentesque, massa ac finibus euismod, ipsum libero bibendum ante, sed aliquet felis lectus quis massa. Etiam sagittis aliquet malesuada. Ut ut tellus velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed mauris est, dictum quis dapibus malesuada, gravida et mi.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius mauris quis leo facilisis maximus. Sed aliquam mi elit, eu varius mi facilisis a. Aliquam erat volutpat. Sed in erat non tortor laoreet pharetra in eu diam. Etiam aliquet blandit aliquam. Mauris lobortis faucibus magna, facilisis finibus est egestas eu. Maecenas et blandit lacus.
                    Vestibulum in aliquet velit, blandit rhoncus sapien. Curabitur a mauris lorem. Suspendisse vel quam ac elit sodales viverra. Curabitur rutrum nibh augue. Nam at viverra odio, vel molestie felis. Duis pellentesque, massa ac finibus euismod, ipsum libero bibendum ante, sed aliquet felis lectus quis massa. Etiam sagittis aliquet malesuada. Ut ut tellus velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed mauris est, dictum quis dapibus malesuada, gravida et mi.
                </p> */}
            </div>
        </>
    )
}