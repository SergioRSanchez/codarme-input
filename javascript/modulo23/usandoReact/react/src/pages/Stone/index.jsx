import { ReactComponent as StoneLogo } from './assets/logo.svg'
import { ReactComponent as GooglePlay } from './assets/googlePlay.svg'
import { ReactComponent as AppStore } from './assets/appStore.svg'
import { ReactComponent as Attendance } from './assets/attendance.svg'
import { ReactComponent as Jobs } from './assets/jobs.svg'
import { ReactComponent as Ecommerce } from './assets/ecommerce.svg'
import { ReactComponent as FacebookIcon } from './assets/facebookIcon.svg'
import { ReactComponent as TwitterIcon } from './assets/twitterIcon.svg'
import { ReactComponent as InstagramIcon } from './assets/instagramIcon.svg'
import { ReactComponent as LinkedinIcon } from './assets/linkedinIcon.svg'
import { ReactComponent as YouTubeIcon } from './assets/youtubeIcon.svg'

import './css/main.css'

export function Stone () {
  return (
    <>
      <header className='flex justify-between items-center py-3 px-10'>
        <div className='flex'>
          <StoneLogo width={112} />
          <button className='py-3 px-5 font-semibold inline-block relative transition-all duration-500 before:content-[""] before:absolute before:-bottom-0.5 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-[#00734D] before:via-[#42EC9A] before:to-[#00A868] hover:before:w-full hover:before:opacity-100'>Produtos</button>
          <button className='py-3 px-5 font-semibold inline-block relative transition-all duration-500 before:content-[""] before:absolute before:-bottom-0.5 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-[#00734D] before:via-[#42EC9A] before:to-[#00A868] hover:before:w-full hover:before:opacity-100'>Sobre a Stone</button>
          <button className='py-3 px-5 font-semibold inline-block relative transition-all duration-500 before:content-[""] before:absolute before:-bottom-0.5 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-[#00734D] before:via-[#42EC9A] before:to-[#00A868] hover:before:w-full hover:before:opacity-100'>Blog</button>
        </div>
        <div>
        <button className='py-3 px-5 font-semibold inline-block relative transition-all duration-500 before:content-[""] before:absolute before:-bottom-0.5 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-[#00734D] before:via-[#42EC9A] before:to-[#00A868] hover:before:w-full hover:before:opacity-100'>Atendimento</button>
        <button className='py-3 px-5 font-semibold inline-block relative transition-all duration-500 before:content-[""] before:absolute before:-bottom-0.5 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-[#00734D] before:via-[#42EC9A] before:to-[#00A868] hover:before:w-full hover:before:opacity-100'>Baixe o app</button>
          <button className='py-3 px-5 mx-2 font-semibold border-2 border-[#E8E8E8] hover:bg-[#E8E8E8] rounded-3xl'>Login</button>
          <button className='py-3 px-5 ml-2 font-semibold border-2 border-transparent rounded-3xl bg-[#42EC9A] hover:bg-[#33be7b]'>Seja Stone</button>
        </div>
      </header>
      <section className="bg-[url('/src/pages/Stone/assets/hero.png')] w-[1280px] h-[640px] pt-[265px] pl-10">
        <h1 className='text-5xl text-white w-[501px] font-bold'>A parceria de mais de 1 milhão de lojistas brasileiros</h1>
        <p className='text-xl text-white w-[488px] mt-4'>Ser Stone é juntar soluções de venda com uma conta PJ gratuita, seguros, plano de saúde e atendimento humano em 5 segundos</p>
        <button className='py-4 px-9 ml-2 font-semibold border-2 border-transparent rounded-[90px] bg-[#42EC9A] hover:bg-[#33be7b] mt-6'>Seja Stone agora</button>
      </section>
      <section className='flex py-28 bg-[#F7F9FD] align-middle'>
        <div className='pl-64 mr-14'>
          <h2 className='text-4xl font-bold mt-16'>Menos banco,</h2>
          <h2 className='text-4xl font-bold text-[#00A868]'>mais negócio</h2>
          <p className='text-lg w-[314px] mt-2'>Solução financeira com taxas personalizadas e Conta PJ gratuita aberta em poucas horas, direto pelo celular. Sem burocracia, sem asteriscos e sem musiquinha</p>
          <button className='py-3 px-5 ml-2 mt-6 font-semibold border-2 border-transparent rounded-3xl bg-[#42EC9A] hover:bg-[#33be7b]'>Descubra suas taxas</button>
        </div>
        <div>
          <img src="/src/pages/Stone/assets/maquininha.png" alt="imagem de uma máquina de cartão verde" />
        </div>
      </section>
      <section>
        <div className='flex py-14'>
          <div className='pl-40'>
            <img src="/src/pages/Stone/assets/maquininha2.png" alt="imagem de uma máquina de cartão verde" />
          </div>
          <div className='ml-10 pt-16'>
            <span className='text-[#00734D] text-lg font-bold'>MAQUININHA DE CARTÃO</span>
            <h2 className='font-bold w-96 text-3xl my-2'>Maquininha rápida, inteligente e com taxas personalizadas</h2>
            <p className='text-lg w-[473px] mt-1 mb-4'>Feita pra vender mais: no débito ou no crédito, no Pix ou no voucher</p>
            <button className='mb-4 text-lg text-[#00A868] hover:text-[#33be7b]'>Conheça a maquininha</button>
            <br></br>
            <button className='text-lg text-[#00A868] hover:text-[#33be7b]'>Descubra suas taxas personalizadas</button>
          </div>
        </div>

        <div className='flex py-14 pl-40'>
          <div className='pt-16 mr-10'>
            <span className='text-[#00734D] text-lg font-bold'>CONTA STONE PJ E PF</span>
            <h2 className='font-bold w-[436px] text-3xl my-2'>Conta PJ gratuita pra gerir seu negócio, antecipar seu dinheiro e vender online</h2>
            <p className='text-lg font-semibold w-[456px] mt-1 mb-4'>Pague e venda com Pix, venda nas redes sociais com o Link de Pagamento, gere boletos e fique no controle do seu negócio com a Conta Stone</p>
            <button className='mb-4 text-lg text-[#00A868] hover:text-[#33be7b]'>Conheça a Conta Stone</button>
            <br></br>
            <button className='mr-5 w-[139px] hover:w-[141px]'><GooglePlay /></button>
            <button className='w-[139px] hover:w-[141px]'><AppStore /></button>
          </div>
          <div>
            <img src="/src/pages/Stone/assets/maquininha3.png" alt="imagem de uma máquina de cartão verde" />
          </div>
        </div>
      </section>

      <section className='bg-[#EFF4F8] py-20'>
        <h1 className='mb-6 px-64 text-4xl font-bold text-center'>Seja Stone agora e ganhe tempo pro que realmente importa: <span className='text-[#00A868]'>seu negócio</span></h1>
        <div className='px-64 flex justify-center'>
          <button className='py-3 px-5 mx-2 font-semibold border-2 border-transparent rounded-3xl bg-[#42EC9A] hover:bg-[#33be7b]'>Descubra suas taxas</button>
          <button className='py-3 px-5 ml-2 font-semibold border-2 border-[#E8E8E8] hover:bg-[#E8E8E8] rounded-3xl'>Abra sua conta</button>
        </div>
      </section>

      <section className='flex bg-[#31383F] justify-between py-20 pl-28 pr-36'>
        <div>
          <Attendance width={40} />
          <h2 className='text-xl font-bold text-white mt-2 mb-1'>Fale com a gente</h2>
          <p className='font-semibold text-white mb-3'>Seja atendido pelo nosso time</p>
          <button className='text-[#00A868] hover:text-[#33be7b]'>Atendimento</button>
        </div>
        <div>
          <Jobs width={40} />
          <h2 className='text-xl font-bold text-white mt-2 mb-1'>Trabalhe conosco</h2>
          <p className='font-semibold text-white mb-3'>Transforme seu potencial em potência</p>
          <button className='text-[#00A868] hover:text-[#33be7b]'>Conheça</button>
        </div>
        <div>
          <Ecommerce width={40} />
          <h2 className='text-xl font-bold text-white mt-2 mb-1'>E-commerce</h2>
          <p className='font-semibold text-white mb-3'>Soluções pra quem já tem loja virtual</p>
          <button className='text-[#00A868] hover:text-[#33be7b]'>Conheça</button>
        </div>
      </section>

      <footer className='flex justify-between py-20 px-10 bg-[#20252A]'>
        <div>
          <StoneLogo width={92} />
        </div>
        <div className='flex gap-8'>
          <button className='w-10 hover:w-[43px]'><FacebookIcon /></button>
          <button className='w-10 hover:w-[43px]'><TwitterIcon /></button>
          <button className='w-10 hover:w-[43px]'><InstagramIcon /></button>
          <button className='w-10 hover:w-[43px]'><LinkedinIcon /></button>
          <button className='w-10 hover:w-[43px]'><YouTubeIcon /></button>
        </div>
      </footer>
    </>
  )
}