import { Menu } from "@headlessui/react";
import { ReactNode } from "react";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

type MenuProps = {
    href: string;
    children: ReactNode
    blank?: boolean
}

export const DropDownMenuItems = ({children , href , blank} : MenuProps) => {
    return (
        <Menu.Item>
            {({active}) => (
                <a href={href} target={blank ? '_blank' : ''} rel="noreferrer" className={classNames(active ? 'bg-orange-200 dark:bg-zinc-600' : '', 'block px-4 py-2 text-sm')}>
                    {children}
                </a>
            )}
        </Menu.Item>
    )
}