import { ReactComponent as CommentLogo } from '../../assets/commentLogo.svg'
import './main.css'

export function Comment() {
  return (
    <>
      <div className="container">
        <CommentLogo width={80}/>
        <div className="content">
          <div className="title">
            <span>Sérgio Sanchez</span>
            <span className='colored'> • 3h atrás</span>
            <p>Quem fez o desafio compartilha aqui!</p>
          </div>
        </div>
      </div>
    </>
  )
}