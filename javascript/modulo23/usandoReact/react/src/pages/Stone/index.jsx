import { ReactComponent as StoneLogo } from './assets/logo.svg'

import './css/main.css'

export function Stone () {
  return (
    <>
      <header className='flex justify-between items-center py-3 px-10'>
        <div className='flex'>
          <StoneLogo width={112} />
          <button className='py-3 px-5 font-semibold'>Produtos</button>
          <button className='py-3 px-5 font-semibold'>Sobre a Stone</button>
          <button className='py-3 px-5 font-semibold'>Blog</button>
        </div>
        <div>
          <button className='py-3 px-5 font-semibold'>Atendimento</button>
          <button className='py-3 px-5 font-semibold'>Baixe o app</button>
          <button className='py-3 px-5 mx-2 font-semibold border-2 border-[#E8E8E8] rounded-3xl'>Login</button>
          <button className='py-3 px-5 ml-2 font-semibold border-2 border-transparent rounded-3xl bg-[#42EC9A]'>Seja Stone</button>
        </div>
      </header>
    </>
  )
}