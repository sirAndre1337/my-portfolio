import useTheme from '../../hooks/useTheme'
import { ButtonToggleTheme } from '../ButtonToggleTheme'
import { IoLogoGithub } from 'react-icons/io5'
import Link from 'next/link';
import { DropDownMenu } from '../DropDownMenu';

export const Navbar = () => {

    const { theme, changeTheme } = useTheme();

    return (
        <header className={`${theme}`}>
            <div className='fixed w-full p-2 backdrop-blur-md bg-white/50 dark:bg-white/10 text-black dark:text-white'>
                <div className='mx-auto max-w-3xl'>
                    <nav className='flex items-center m-1 gap-1 md:gap-6 text-base'>
                        <Link href="/">
                            <span className="font-semibold tracking-tighter text-lg hover:underline cursor-pointer">Andre Lacerda</span>
                        </Link>
                        <div className='items-center gap-6 hidden md:flex'>
                            <Link href="/projetos">
                                <span className="hover:underline cursor-pointer">Projetos</span>
                            </Link>
                            <Link href="https://github.com/SirAndre1337" passHref>
                                <a className="flex items-center gap-1 hover:underline cursor-pointer" target="_blank">
                                    <IoLogoGithub size="20" />GitHub
                                </a>
                            </Link>
                        </div>
                        <div className="flex-1"></div>
                        <ButtonToggleTheme theme={theme} changeTheme={changeTheme} />
                        <div className='flex md:hidden mr-1'><DropDownMenu /></div>
                    </nav>
                </div>
            </div>
        </header>
    )
}