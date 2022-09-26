import { Layout } from '../components/Layout'
import { Title } from '../components/Title'
import { ButtonLink } from '../components/ButtonLink'
import { BioSection, BioYear } from '../components/Bio'
import { IoLogoGithub, IoLogoLinkedin , IoLogoWhatsapp, IoMail} from 'react-icons/io5'
import { LinkOnline } from '../components/Online'

export default function Home() {
  return (
    <Layout>
      <div className='mx-12'>
        <div className='flex justify-center text-center p-4'>
          <p className='p-4 bg-white/50 dark:bg-white/10 rounded-md w-full'>Olá, eu sou um desenvolvedor em construção :)</p>
        </div>
        <div className='flex flex-col md:flex-row justify-between px-4 py-1 items-center'>
          <p className='font-bold text-2xl md:text-5xl mb-4 md:mb-0'>André Lacerda</p>
          <img src="/images/andre.jpg" width={95} height={95} alt="profile picture" className='rounded-full' />
        </div>
        <div className='ml-4'>
          <Title title='About Me' />
          <p className='py-2 indent-4 text-justify'>
            Meu nome e André Lacerda e sou um apaixonado por tecnologia. Estou estudando React e JavaScript, apesar de estar focado no frontEnd gostaria de me tornar um desenvolvedor Full-Stack. Estudo por conta própria buscando sempre aprender algo novo.
          </p>
          <div className='flex justify-center p-2 my-4'>
            <ButtonLink text='Projetos' to='/projetos' />
          </div>
          <Title title='Bio' />
          <div className='mt-2 mb-4'>
            <BioSection>
              <BioYear>1995</BioYear>
              Nasci e moro em Brasília-DF ( 27 anos ).
            </BioSection>
            <BioSection>
              <BioYear>2018</BioYear>
              Estagiário no TST de Brasília (1 ano e 4 meses), desenvolvendo com HTML/JS/CSS (Angular/Bootstrap), programava mais no front mas realizava tarefas básicas com Java.
            </BioSection>
            <BioSection>
              <BioYear>2022</BioYear>
              Cursando o último semestre de Sistemas de Informações, término em 12/22.
            </BioSection>
            <div>
            </div>
          </div>
          <Title title='Gostos' />
          <p className='py-2 indent-4'>Música , Games (principalmente os com histórias), Filmes/Séries , Jogar Futebol, Assistir a NFL e NBA.</p>
          <Title title='Online/Contato' />
          <LinkOnline logo={<IoLogoGithub />} href="https://github.com/SirAndre1337">
            @SirAndre1337
          </LinkOnline>
          <LinkOnline logo={<IoLogoLinkedin />} href='https://www.linkedin.com/in/andre-luis-lacerda'>
            @andre-luis-lacerda
          </LinkOnline>
          <LinkOnline logo={<IoMail />} href='mailto:andrelluis17@hotmail.com'>
            @andrelluis17
          </LinkOnline>
          <LinkOnline logo={<IoLogoWhatsapp />} href='https://wa.me/5561985878097'>
            Andre
          </LinkOnline>
        </div>
      </div>
    </Layout>
  )
}
