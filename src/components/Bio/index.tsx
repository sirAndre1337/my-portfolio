import { ReactNode } from "react"

interface BioProps {
    children: ReactNode;
}

export const BioSection = ({children} : BioProps) => {
    return (
        <div className="flex flex-row gap-2">
            {children}
        </div>
    )
}

export const BioYear = ({children} : BioProps) => {
    return (
        <p className="font-bold">
            {children}
        </p>
    )
}