import { createContext, useEffect, useState } from "react";

// type Theme = 'dark' | 'light';

interface ThemeContextProps {
    theme?: string;
    changeTheme?: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({})

export function ThemeProvider(props) {

    const [theme, setTheme] = useState('dark');

    function changeTheme() {

        const newTheme = theme === 'dark' ? 'light' : 'dark';

        setTheme(newTheme);

        localStorage.setItem('theme', newTheme);
    }

    useEffect(() => {
        if (!localStorage.getItem('theme')) {
            setTheme('dark');
        }
        else {
            setTheme(localStorage.getItem('theme'));
        }
    }, [])

    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;