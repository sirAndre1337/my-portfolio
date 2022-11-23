import { Layout } from "../components/Layout";
import { WorkCard } from "../components/WorkCard";
import { IoWifi } from "react-icons/io5"

const Works = () => {
    return (
        <Layout>
            <div className='md:flex justify-center text-center p-6 hidden'>
                <p className='p-4 bg-white/50 dark:bg-white/10 rounded-md w-full flex items-center justify-center gap-4'>Projetos/Estudos. <IoWifi size={25} color="green" /></p>
            </div>
            <p className="ml-6 mb-2 md:mb-6 mt-4 font-bold text-lg">Projetos</p>
            <div className="p-4 pb-6 grid grid-col-1 md:grid-cols-2">
                <WorkCard
                    imgSrc="/images/cash/dashboard.jpg"
                    title="Cash"
                    href="cash"
                >
                    Cash é uma aplicação Full Stack web construída usando NodeJS/NextJS.
                </WorkCard>
                <WorkCard
                    imgSrc="/images/homeDscatalog.png"
                    title="DS Catalog"
                    href="dscatalog"
                >
                    DS Catalog é uma aplicação full stack web, construída durante o Bootcamp Spring React, ministrado pela <a href="https://devsuperior.com.br/" target="_blank" rel="noreferrer" className="text-[#3D7AED] dark:text-pink-400 hover:underline">DevSuperior</a>.
                </WorkCard>
                <WorkCard
                    imgSrc="/images/quiz/quizResposta.jpg"
                    title="Quiz app"
                    href="quiz"
                >
                    Um projeto simples de perguntas e respostas utilizando NEXT e sua API.
                </WorkCard>
                <WorkCard
                    imgSrc="/images/movieFlix/homeFlix.jpg"
                    title="Movie Flix"
                    href="movieflix"
                >
                    Aplicação full stack web, construida usando SpringBoot/ReactJS.
                </WorkCard>
            </div>
        </Layout >
    )
}

export default Works;