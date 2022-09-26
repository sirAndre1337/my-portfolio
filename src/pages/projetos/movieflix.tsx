import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import { Layout } from "../../components/Layout";

const MovieFlix = () => {
    return (
        <Layout>
            <div className="md:mx-12 mt-8">
                <div className="flex items-center gap-1">
                    <Link href="/projetos">
                        <span className="text-[#3D7AED] dark:text-pink-400 cursor-pointer hover:underline">Projetos</span>
                    </Link>
                    <IoChevronForward />
                    <span className="font-bold text-xl">Movie Flix</span>
                    <span className="font-bold bg-[#EDF2F7] dark:bg-white/20 text-sm ml-1 px-0.5">2022</span>
                </div>
                <div className="indent-4 text-justify my-4">
                    Movie Flix é uma aplicação Full Stack web construída para treinar os conhecimentos do Bootcamp Spring/React da <a href="https://devsuperior.com.br/" target="_blank" rel="noreferrer" className="text-[#3D7AED] dark:text-pink-400 hover:underline">DevSuperior</a>.
                    O aplicativo mostra todos os filmes cadastrados podendo selecionar filmes por genero, e deixar uma avaliacão do mesmo.
                </div>
                    <div className="flex gap-3 items-center mb-1 mt-4">
                        <span className="text-xs font-bold bg-[#C6F6D5] px-1 dark:text-[#81E6D9] dark:bg-[#587C66]">WEBSITE</span>
                        <a href="https://andre-movieflix.netlify.app" target="_blank" rel="noreferrer" className="text-[#3D7AED] dark:text-pink-400 cursor-pointer hover:underline">https://andre-movieflix.netlify.app</a>
                    </div>
                    <div className="flex gap-3 items-center mb-1">
                        <span className="text-xs bg-[#C6F6D5] px-1 font-bold dark:text-[#81E6D9] dark:bg-[#587C66]">STACK</span>
                        <span className="">Spring Boot, OAuth/JWT, React, Bootstrap, TypeScript, PostGreSQL</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className="text-xs bg-[#C6F6D5] px-1 font-bold dark:text-[#81E6D9] dark:bg-[#587C66]">DEPLOYMENT</span>
                        <span className="">BackEnd: Heroku, FrontEnd: Netlify.</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className="text-xs bg-[#C6F6D5] px-1 font-bold dark:text-[#81E6D9] dark:bg-[#587C66]">USER/PASSWORD</span>
                        <span className="">andre@gmail.com - 123456</span>
                    </div>
                <div className="flex flex-col gap-4 mb-2 mt-4">
                    <img src="/images/movieFlix/homeFlix.jpg" alt="Catalog de produtos" className="h-auto w-auto rounded-md" />
                    <img src="/images/movieFlix/moviesFlix.jpg" alt="Catalog de produtos" className="h-auto w-auto rounded-md" />
                    <img src="/images/movieFlix/detalhesFlix.jpg" alt="Catalog de produtos" className="h-auto w-auto rounded-md" />
                </div>
            </div>
        </Layout>
    )
}

export default MovieFlix;