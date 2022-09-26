import { motion } from 'framer-motion';
import { IoMoon , IoSunny } from 'react-icons/io5';


interface ButtonToggleThemeProps {
    theme: string
    changeTheme: () => void
}

export const ButtonToggleTheme = ({ theme, changeTheme }: ButtonToggleThemeProps) => {
    return (
        <>
            {theme === 'dark' &&
                <motion.button
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => changeTheme()}
                    className='bg-orange-300 p-2 rounded'>
                    <IoSunny size={20} color="white" />
                </motion.button>}

            {theme === 'light' &&
                <motion.button
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => changeTheme()}
                    className='bg-purple-900 p-2 rounded text-white'>
                    <IoMoon size={20} color="white" />
                </motion.button>}
        </>
    )
}