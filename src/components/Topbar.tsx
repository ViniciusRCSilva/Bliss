import { UserCircle } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/logo_bliss.svg'

export function Topbar(){
    return(
        <div className="fixed w-full h-16 bg-white shadow-md">
            <div className='flex w-full h-full items-center justify-center'>
                <div className='flex w-[80%] items-center justify-between text-green-blue'>
                    <Link href='/'>
                        <Image src={Logo} alt="Logotipo do Bliss" width={80} />
                    </Link>
                    
                    <Link href='/account' className='flex items-center group'>
                        <UserCircle className='text-4xl transform lg:translate-x-2 lg:group-hover:translate-x-0 transition-transform' weight='fill' />
                        <p className='hidden lg:flex text-lg transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all'>Minha conta</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}