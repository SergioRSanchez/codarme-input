import { ReactComponent as Landscape } from '../../assets/landscape.svg'
import { ReactComponent as LandComment } from '../../assets/landComment.svg'
import { ReactComponent as LandView } from '../../assets/landView.svg'
import './main.css'

export function ImageCard() {
  return (
    <>
      <div className="container">
        <Landscape width={320}/>
        <div className="content">
          <h1>Escolha do dia - Natureza</h1>
          <div className="profile">
            <img src="/src/assets/landProfile.png" alt="mulher ruiva" />
            <span>Lynsey Searle</span>
            <span className="colorful">&nbsp;• 1 dia atrás</span>
          </div>
          <div className="social">
            <div className="comments">
              <LandComment width={32}/>
              <p>72</p>
            </div>
            <div className="views">
              <LandView width={32}/>
              <p>24</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}