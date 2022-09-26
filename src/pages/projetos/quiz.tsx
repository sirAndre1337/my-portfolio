import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import { Layout } from "../../components/Layout";

const Quiz = () => {
    return (
        <Layout>
            <div className="md:mx-12 mt-8">
                <div className="flex items-center gap-1">
                    <Link href="/projetos">
                        <span className="text-[#3D7AED] dark:text-pink-400 cursor-pointer hover:underline">Projetos</span>
                    </Link>
                    <IoChevronForward />
                    <span className="font-bold text-xl">Quiz App</span>
                    <span className="font-bold bg-[#EDF2F7] dark:bg-white/20 text-sm ml-1 px-0.5">2022</span>
                </div>
                <div className="indent-4 text-justify my-4">
                    Um aplicativo de perguntas e respostas, o jogador tem dez segundos para selecionar uma alternativa e o jogo revela a resposta correta.
                    As perguntas asim como as respostas de cada pergunta sao embaralhadas a cada nova tentativa.
                    Ao final e mostrado o resultado, informando o total de perguntas, quantas foram acertadas e o seu percentual.
                </div>
                    <div className="flex gap-3 items-center mb-1 mt-4">
                        <span className="text-xs font-bold bg-[#C6F6D5] px-1 dark:text-[#81E6D9] dark:bg-[#587C66]">WEBSITE</span>
                        <a href="https://quiz-andre.vercel.app" target="_blank" rel="noreferrer" className="text-[#3D7AED] dark:text-pink-400 cursor-pointer hover:underline">https://quiz-andre.vercel.app/</a>
                    </div>
                    <div className="flex gap-3 items-center mb-1">
                        <span className="text-xs bg-[#C6F6D5] px-1 font-bold dark:text-[#81E6D9] dark:bg-[#587C66]">STACK</span>
                        <span className="">NextJS, TypeScript, API NextJS</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className="text-xs bg-[#C6F6D5] px-1 font-bold dark:text-[#81E6D9] dark:bg-[#587C66]">DEPLOYMENT</span>
                        <span className="">Vercel</span>
                    </div>
                <div className="flex flex-col gap-4 mb-2 mt-4">
                    <img src="/images/quiz/quizPergunta.jpg" alt="Catalog de produtos" className="h-auto w-auto rounded-md" />
                    <img src="/images/quiz/quizResposta.jpg" alt="Catalog de produtos" className="h-auto w-auto rounded-md" />
                    <img src="/images/quiz/quizResultado.jpg" alt="Catalog de produtos" className="h-auto w-auto rounded-md" />
                </div>
            </div>
        </Layout>
    )
}

export default Quiz;