import { ArrowsClockwise, BookBookmark, CaretUp, House, Phone } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavigateProps{
  active: string
}

export function Navigate({ active }: NavigateProps){
  const [visibleNavigation, setVisibleNavigation] = useState('fixed')
  const [visibleBtn, setVisibleBtn] = useState('hidden')

  function handleHideNavigation(){
    setTimeout(() => {
      setVisibleNavigation('hidden')
      setVisibleBtn('fixed')
    }, 5000);
  }

  function _onclick(){
    setVisibleNavigation('fixed')
    setVisibleBtn('hidden')   
  }

  useEffect(() => {
    handleHideNavigation()
  }, [])

  return(
    <>
      <div className={`lg:hidden ${visibleBtn} bottom-0 w-full pb-4 pr-4 animate-screenOpacity`}>
        <div className="flex w-full justify-end items-end">
          <div onClick={_onclick} className="flex items-center justify-center w-9 h-9 rounded-full bg-green-blue text-2xl text-white">
            <CaretUp weight="bold"/>
          </div>
        </div>
      </div>

      <div onAnimationEnd={handleHideNavigation} className={`${visibleNavigation} w-full h-16 bottom-0 bg-white shadow-md animate-screenOpacity`}>
        <div className="lg:hidden flex w-full h-full bg-white items-center justify-center select-none shadow-md rotate-180">

          <div className="flex w-[80%] justify-between text-3xl text-green-blue rotate-180">
            {active == 'house' ? (              
              <Link href='/' className='flex lg:hidden items-center opacity-100'>
                <House weight="fill" />
              </Link>
            ): (
              <Link href='/' className='flex lg:hidden items-center opacity-50'>
                <House />
              </Link>
            )}

            {active == 'habits' ? (              
              <Link href='/habits' className='flex lg:hidden items-center opacity-100'>
                <ArrowsClockwise weight="fill" />
              </Link>
            ): (
              <Link href='/habits' className='flex lg:hidden items-center opacity-50'>
                <ArrowsClockwise />
              </Link>
            )}

            {active == 'diary' ? (              
              <Link href='/diary' className='flex lg:hidden items-center opacity-100'>
                <BookBookmark weight="fill" />
              </Link>
            ): (
              <Link href='/diary' className='flex lg:hidden items-center opacity-50'>
                <BookBookmark />
              </Link>
            )}

            {active == 'contacts' ? (              
              <Link href='/contacts' className='flex lg:hidden items-center opacity-100'>
                <Phone weight="fill" />
              </Link>
            ): (
              <Link href='/contacts' className='flex lg:hidden items-center opacity-50'>
                <Phone />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}