"use client";

import Link from 'next/link'
import Image from 'next/image'

import { usePathname } from 'next/navigation'

type LinkType ={
    name: string;
    path: string;
}

interface NavbarProps {
    navLinks: LinkType[];
}


const Navbar: React.FC<NavbarProps>=({navLinks})=>{

    const pathName=usePathname();

    const session=false;

    const isAdmin=false;

    return (
        <nav className='h-[40px] mt-2 mx-2 flex justify-between'>
            <Image src='/favicon.ico' alt='logo' width={40} height={40} />
            <ul className='flex items-center'>
                {navLinks.map((navLink)=>(
                        <li className="p-4 text-sm" key={navLink.name}>
                        <Link href={navLink.path} className={`rounded-2xl w-full p-2 ${pathName === navLink.path ? 'bg-white text-black' : ''}`}>
                            {navLink.name}
                        </Link>
                        </li>
                ))}
                {session ? (
                    isAdmin && (
                        <Link href="/dash" className="p-4 text-sm">Admin</Link>
                    )
                ) : 
                    pathName !== '/login' && (
                        <Link href="/login" className='text-sm w-full mx-4 p-1.5 bg-white text-black' >
                            Login
                        </Link>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar;