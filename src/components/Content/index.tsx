import { ReactNode } from "react"
import { motion } from 'framer-motion';

interface ContentProps {
    children: ReactNode;
}

export const Content = ({ children }: ContentProps) => {
    return (
        <motion.section
            className="pt-[62px] px-8 mx-auto max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.section>
    )
}