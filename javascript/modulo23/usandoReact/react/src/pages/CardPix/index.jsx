import {ReactComponent as IconPixLogo} from '../../assets/iconPix.svg'
import './main.css'

export function CardPix() {
  return (
    <div className="container">
      <IconPixLogo width={48} className='logo'/>
      <h2>Transferências via Pix</h2>
      <h3>R$ 150,00</h3>
    </div>
  )
}