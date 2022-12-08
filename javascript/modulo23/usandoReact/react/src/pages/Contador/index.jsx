import { useEffect, useState } from 'react'

export function Counter() {
  //  useState pois será alterado conforme o número de vezes que apertamos o botão
  const [total, setTotal] = useState(0)

  //  Implementando o adicionar ou remover
  const add = () => setTotal(prevState => total + 1)
  const remove = () => setTotal(prevState => total - 1)

  return (
    <div>
      <button onClick={add}>Adicionar</button>
      <button onClick={remove}>Remover</button>
      <div>Total: {total}</div>
    </div>
  )
}

export function Home() {

  //  Efeito de habilitar ou desabilitar o contador
  const [ enabled, setEnabled ] = useState(false)
  const toggleCounter = () => {
    setEnabled(!enabled)
  }

  return (
    <>
      <div className='bg-red-500'>
        <button onClick={toggleCounter}>
          {enabled ? 'Esconder' : 'Mostrar'} contador
        </button>
        {enabled ? <Counter /> : ''}
      </div>
    </>
  )
}