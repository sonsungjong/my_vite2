import reactLogo from './../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Header.css';

export default function Header(){
  return(
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="header_logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="header_logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </div>
  )
}