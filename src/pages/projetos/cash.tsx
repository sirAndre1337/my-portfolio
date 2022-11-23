import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import { Layout } from "../../components/Layout";

const Cash = () => {
    return (
        <Layout>
            <div className="md:mx-12 mt-8">
                <div className="flex items-center gap-1">
                    <Link href="/projetos">
                        <span className="text-[#3D7AED] dark:text-pink-400 cursor-pointer hover:underline">Projetos</span>
                    </Link>
                    <IoChevronForward />
                    <span className="font-bold text-xl">Cash App</span>
                    <span className="font-bold bg-[#EDF2F7] dark:bg-white/20 text-sm ml-1 px-0.5">2022</span>
                </div>
                <div className="indent-4 text-justify my-4">
                    Cash é uma aplicação Full Stack web construída usando JavaScript.
                    O software consiste em uma mini aplicação financeira, cujo objetivo seja possibilitar que usuários consigam realizar transferências internas entre si.
                    Neste projeto também foram trabalhados tópicos como testes com Jest no backend.
                </div>
                <div className="flex gap-3 items-center mb-1 mt-4">
                    <span className="text-xs font-bold bg-[#C6F6D5] px-1 dark:text-[#81E6D9] dark:bg-[#587C66]">SOURCE</span>
                    <a href="https://github.com/sirAndre1337/cash" target="_blank" rel="noreferrer" className="text-[#3D7AED] dark:text-pink-400 cursor-pointer hover:underline">https://github.com/sirAndre1337/cash</a>
                </div>
                <div className="flex gap-3 items-center mb-1">
                    <span className="text-xs bg-[#C6F6D5] px-1 font-bold dark:text-[#81E6D9] dark:bg-[#587C66]">STACK</span>
                    <span className="">NodeJS/NextJS, TypeScript, TailwindCSS, JWT, Prisma, PostGreSQL</span>
                </div>
                <div className="flex flex-col gap-4 mb-2 mt-4">
                    <img src="/images/cash/login.JPG" alt="ImagemloginCash" className="h-auto w-auto rounded-md" />
                    <img src="/images/cash/dashboard.JPG" alt="ImagemDashboardCash" className="h-auto w-auto rounded-md" />
                    <img src="/images/cash/pagtransfer.JPG" alt="ImagemTransferCash" className="h-auto w-auto rounded-md" />
                </div>
            </div>
        </Layout>
    )
}

export default Cash;