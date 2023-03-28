import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Link from "next/link";

interface NavigateProps{
    back: string
    linkBack: string
    next?: string
    linkNext?: string
    visible?: string
}

export function Navigate(props: NavigateProps){
    return(
        <div className="flex w-full items-center justify-center">

          <div className="flex w-[80%] justify-between text-lg">
            <Link href={`/${props.linkBack}`}>
              <div className="flex items-center text-green-blue">
                <CaretLeft/>
                <p>{props.back}</p>
              </div>
            </Link>

            <Link href={`/${props.linkNext}`}>
              <div className="flex items-center text-green-blue">
                <p>{props.next}</p>
                <CaretRight className={`${props.visible}`}/>
              </div>
            </Link>
          </div>
          
        </div>
    )
}