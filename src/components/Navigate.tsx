import { ArrowsClockwise, BookBookmark, House, Phone } from "@phosphor-icons/react";
import Link from "next/link";

interface NavigateProps{
  active: string
}

export function Navigate({ active }: NavigateProps){
    return(
        <div className="lg:hidden flex w-full h-16 py-10 bg-white items-center justify-center select-none shadow-md rotate-180">

          <div className="flex w-[80%] justify-between text-3xl text-green-blue rotate-180">
            {active == 'house' ? (              
              <Link href='/' className='flex lg:hidden items-center opacity-100'>
                <House />
              </Link>
            ): (
              <Link href='/' className='flex lg:hidden items-center opacity-50'>
                <House />
              </Link>
            )}

            {active == 'habits' ? (              
              <Link href='/habits' className='flex lg:hidden items-center opacity-100'>
                <ArrowsClockwise />
              </Link>
            ): (
              <Link href='/habits' className='flex lg:hidden items-center opacity-50'>
                <ArrowsClockwise />
              </Link>
            )}

            {active == 'diary' ? (              
              <Link href='/diary' className='flex lg:hidden items-center opacity-100'>
                <BookBookmark />
              </Link>
            ): (
              <Link href='/diary' className='flex lg:hidden items-center opacity-50'>
                <BookBookmark />
              </Link>
            )}

            {active == 'contacts' ? (              
              <Link href='/contacts' className='flex lg:hidden items-center opacity-100'>
                <Phone />
              </Link>
            ): (
              <Link href='/contacts' className='flex lg:hidden items-center opacity-50'>
                <Phone />
              </Link>
            )}
          </div>
          
        </div>
    )
}