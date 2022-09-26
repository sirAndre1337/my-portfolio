import { Layout } from "../../components/Layout";
import { IoChevronForward } from 'react-icons/io5';
import Link from "next/link";

const dsCatalog = () => {
    return (
        <Layout>
            <div className="md:mx-12 mt-8">
                <div className="flex items-center gap-1">
                    <Link href="/projetos">
                        <span className="text-[#3D7AED] dark:text-pink-400 cursor-pointer hover:underline">Projetos</span>
                    </Link>
                    <IoChevronForward />
                    <span className="font-bold text-xl">DsCatalog</span>
                    <span className="font-bold bg-[#EDF2F7] dark:bg-white/20 text-sm ml-1 px-0.5">2022</span>
                </div>
                <div className="indent-4 text-justify my-4">
                    DS Catalog é uma aplicação Full Stack web construída durante o Bootcamp Spring React, ministrado pela <a href="https://devsuperior.com.br/" target="_blank" rel="noreferrer" className="text-[#3D7AED] dark:text-pink-400 hover:underline">DevSuperior</a>.
                    O software consiste em uma aplicação de catálogo de produtos, onde há três tipos de permissões, a do usuário não autenticado, que pode apenas visualizar os produtos, a do usuário com perfil operador, que pode também adicionar categorias ou produtos e a do usuário administrador, que além das outras permissões, também pode gerenciar os outros usuários da aplicação.
                    Neste projeto também foram trabalhados tópicos como testes com Junit, além de CI/CD.
                </div>
                    <div className="flex gap-3 items-center mb-1 mt-4">
                        <span className="text-xs font-bold bg-[#C6F6D5] px-1 dark:text-[#81E6D9] dark:bg-[#587C66]">WEBSITE</span>
                        <a href="https://andre-dscatalog.netlify.app" target="_blank" rel="noreferrer" className="text-[#3D7AED] dark:text-pink-400 cursor-pointer hover:underline">https://andre-dscatalog.netlify.app/</a>
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
                    <img src="/images/dscatalog/dscatalogCatalogo.png" alt="Catalog de produtos" className="h-auto w-auto rounded-md" />
                    <img src="/images/dscatalog/dscatalogProdutos.png" alt="Catalog de produtos" className="h-auto w-auto rounded-md" />
                    <img src="/images/dscatalog/dscatalogProdutosEdicao.png" alt="Catalog de produtos" className="h-auto w-auto rounded-md" />
                    <img src="/images/dscatalog/dscatalogFormularioUsuarios.png" alt="Catalog de produtos" className="h-auto w-auto rounded-md" />
                </div>
            </div>
        </Layout>
    )
}

export default dsCatalog;