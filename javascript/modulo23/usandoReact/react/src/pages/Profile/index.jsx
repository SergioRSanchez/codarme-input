import { ReactComponent as ProfileLogo } from '../../assets/profileLogo.svg'
import './main.css'

export function Profile() {
  return (
    <>
      <div className="container">
        <ProfileLogo width={48}/>
        <div className="text">
          <h1>Sérgio Sanchez</h1>
          <p>Input: Do zero ao mercado</p>
        </div>
      </div>
    </>
  )
}