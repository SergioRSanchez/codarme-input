import { ReactComponent as ReactLogo } from '../../assets/react.svg'

function Title({ children, className='teste'}) {
  return <h1 classname={className}>{children}</h1>
}

export function Home() {
  const title = 'Hello React'
  const classe = 'teste2'
  return (
    <div className='container'>
      <Title className={classe} >
        {title}
      </Title>
      <ReactLogo width={100}/>
    </div>
  )
}