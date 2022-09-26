import Link from "next/link";
import { ReactNode } from "react";

interface WorkCardProps {
    title: string;
    imgSrc: string;
    children: ReactNode;
    href: string;
}

export const WorkCard = ({ children, imgSrc, title , href }: WorkCardProps) => {

    
    return (
        <div className="flex flex-col p-2 items-center">
            <Link href={`projetos/${href}`}>
                <img src={imgSrc} alt={`${title} picture`} className="cursor-pointer rounded-xl w-80 h-40 sm:w-[500px] sm:h-[300px] md:w-[250px] md:h-[150px]" />
            </Link>
            <div className="mt-2 pb-6 md:pb-0.5">
                <p className="text-center">{title}</p>
                <p className="p-1 md:p-1 text-center">
                    {children}
                </p>
            </div>
        </div>
    )
}