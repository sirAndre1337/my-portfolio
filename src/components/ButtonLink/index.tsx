import Link from 'next/link';
import { IoChevronForward } from 'react-icons/io5';

interface ButtonLinkProps {
    text: string;
    to: string
}

export const ButtonLink = ({ text, to }: ButtonLinkProps) => {
    return (
        <Link href={to}>
            <button
                className="bg-[#319795] dark:bg-[#81E6D9] text-white dark:text-black hover:bg-[#2C7A7B] dark:hover:bg-[#4FD1C5]  font-medium h-10 w-32 rounded-md flex justify-center items-center"
            >{text} <IoChevronForward className='ml-2' size="15" />
            </button>
        </Link>
    )
}