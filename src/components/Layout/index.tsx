import Head from "next/head";
import React from "react";
import useTheme from "../../hooks/useTheme";
import { Content } from "../Content";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";


interface LayoutProps {
    children: React.ReactNode;
}


export const Layout = ({children} : LayoutProps) => {

    const { theme } = useTheme();


    return (
        <>
            <Head>
                <meta name="viewport" content='width=device-width, initial-scale=1' />
                <title>Andre Lacerda - Portfolio</title>
            </Head>
            <Navbar />
            <main className={`${theme} flex flex-col`}>
                <div className="break-words leading-6 transition-colors duration-500 bg-[#f0e7db] dark:bg-[#202023] text-black dark:text-white h-screen overflow-auto">
                    <Content>{children}</Content>
                    <Footer />
                </div>
            </main>
        </>
    )
}