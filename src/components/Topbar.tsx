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
                <div className='flex w-[80%] lg:w-[95%] items-center justify-between text-green-blue'>
                    <Link href='/'>
                        <Image src={Logo} alt="Logotipo do Bliss" width={80} />
                    </Link>

                    <div className='flex items-center gap-6'>
                        {active == 'house' ? (
                            <Link href='/' className='hidden lg:flex items-end gap-1'>
                                <House className='text-3xl' weight='fill' />
                                <p className='hidden lg:flex text-lg'>Início</p>
                            </Link>
                        ) : (
                            <Link href='/' className='hidden lg:flex items-end gap-1 hover:opacity-60 transition-opacity'>
                                <House className='text-3xl' />
                                <p className='hidden lg:flex text-lg font-light'>Início</p>
                            </Link>
                        )}

                        {active == 'habits' ? (
                            <Link href='/habits' className='hidden lg:flex items-end gap-1'>
                                <ArrowsClockwise className='text-3xl' weight='fill' />
                                <p className='hidden lg:flex text-lg'>Hábitos</p>
                            </Link>
                        ) : (
                            <Link href='/habits' className='hidden lg:flex items-end gap-1 hover:opacity-60 transition-opacity'>
                                <ArrowsClockwise className='text-3xl' />
                                <p className='hidden lg:flex text-lg font-light'>Hábitos</p>
                            </Link>
                        )}

                        {active == 'diary' ? (
                            <Link href='/diary' className='hidden lg:flex items-end gap-1'>
                                <BookBookmark className='text-3xl' weight='fill' />
                                <p className='hidden lg:flex text-lg'>Diário</p>
                            </Link>
                        ) : (
                            <Link href='/diary' className='hidden lg:flex items-end gap-1 hover:opacity-60 transition-opacity'>
                                <BookBookmark className='text-3xl' />
                                <p className='hidden lg:flex text-lg font-light'>Diário</p>
                            </Link>
                        )}

                        {active == 'contacts' ? (
                            <Link href='/contacts' className='hidden lg:flex items-end gap-1'>
                                <Phone className='text-3xl' weight='fill' />
                                <p className='hidden lg:flex text-lg'>Contatos</p>
                            </Link>
                        ) : (
                            <Link href='/contacts' className='hidden lg:flex items-end gap-1 hover:opacity-60 transition-opacity'>
                                <Phone className='text-3xl' />
                                <p className='hidden lg:flex text-lg font-light'>Contatos</p>
                            </Link>
                        )}

                        {active == 'account' ? (
                            <Link href='/account' className='flex items-end gap-1'>
                                <UserCircle className='text-4xl lg:text-3xl' weight='fill' />
                                <p className='hidden lg:flex text-lg'>Minha conta</p>
                            </Link>
                        ) : (
                            <Link href='/account' className='flex items-end gap-1 hover:opacity-60 transition-opacity'>
                                <UserCircle className='text-4xl lg:text-3xl' />
                                <p className='hidden lg:flex text-lg font-light'>Minha conta</p>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}