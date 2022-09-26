import Link from "next/link";
import { ReactNode } from "react"

interface LinkOnlineProps {
    children: ReactNode;
    logo: ReactNode;
    href: string;
}

export const LinkOnline = ({ children, logo , href} : LinkOnlineProps) => {
    return (
        <Link href={href}>
        <a target="_blank" className='flex mt-2 ml-4 gap-2 items-center p-2 w-fit rounded-md dark:hover:bg-[#262E30] hover:bg-[#E6FFFA] cursor-pointer hover:underline font-bold text-base text-[#2C7A7B] dark:text-[#7DDFD3]'>
            {logo} {children}
        </a>
        </Link>
    )
}