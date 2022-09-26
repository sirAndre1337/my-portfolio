import { ButtonLink } from '../components/ButtonLink';
import {Layout} from '../components/Layout'

const NotFound = () => {
    return (
        <Layout>
            <div className='p-4 border-b-2 border-b-zinc-500'>
                <h1 className='font-bold text-4xl mb-4'>Não Encontrado</h1>
                <p>A página que você tentou acessar não foi encontrada.</p>
            </div>
            <div className='flex justify-center p-4 pt-6'>
                <ButtonLink text='Home' to='/'/>
            </div>
        </Layout>
    )
}

export default NotFound;