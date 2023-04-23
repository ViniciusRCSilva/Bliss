import { ArrowsClockwise, BookBookmark, House, Phone, UserCircle } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/logo_bliss.svg'

interface TopbarProps{
    active?: string
}

export function Topbar({ active }: TopbarProps){
    return(
        <div className="fixed w-full h-16 bg-white shadow-md">
            <div className='flex w-full h-full items-center justify-center'>
                <div className='flex w-[80%] items-center justify-between text-green-blue'>
                    <Link href='/'>
                        <Image src={Logo} alt="Logotipo do Bliss" width={80} />
                    </Link>

                    <Link href='/' className='hidden lg:flex items-center group'>
                        <House className='text-4xl transform lg:translate-x-2 lg:group-hover:translate-x-0 transition-transform' />
                        <p className='hidden lg:flex text-lg transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all'>Início</p>
                    </Link>

                    <Link href='/habits' className='hidden lg:flex items-center group'>
                        <ArrowsClockwise className='text-4xl transform lg:translate-x-2 lg:group-hover:translate-x-0 transition-transform' />
                        <p className='hidden lg:flex text-lg transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all'>Hábitos</p>
                    </Link>

                    <Link href='/diary' className='hidden lg:flex items-center group'>
                        <BookBookmark className='text-4xl transform lg:translate-x-2 lg:group-hover:translate-x-0 transition-transform' />
                        <p className='hidden lg:flex text-lg transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all'>Diário</p>
                    </Link>

                    <Link href='/contacts' className='hidden lg:flex items-center group'>
                        <Phone className='text-4xl transform lg:translate-x-2 lg:group-hover:translate-x-0 transition-transform' />
                        <p className='hidden lg:flex text-lg transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all'>Contatos</p>
                    </Link>


                    {active == 'account' ? (
                        <Link href='/account' className='flex items-center group'>
                            <UserCircle className='text-4xl transform lg:translate-x-2 lg:group-hover:translate-x-0 transition-transform' weight='fill' />
                            <p className='hidden lg:flex text-lg transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all'>Minha conta</p>
                        </Link>
                    ) : (
                        <Link href='/account' className='flex items-center group'>
                            <UserCircle className='text-4xl transform lg:translate-x-2 lg:group-hover:translate-x-0 transition-transform' />
                            <p className='hidden lg:flex text-lg transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all'>Minha conta</p>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}