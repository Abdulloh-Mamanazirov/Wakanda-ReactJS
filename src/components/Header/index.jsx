import './header.css'
import Btn from '../mini-parts/button'
import logo from '../../images/icons/logo.svg'

function Nav() {
  return <header id="main-header">
      <div className="container flex">
        <div className="logo">
          <img src={logo} width={200} alt="LOGO" />
        </div>
        <nav className="main-nav">
          <ul className="flex">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">For freelancers</a></li>
            <li><Btn btnName="Get Started"/></li>
          </ul>
        </nav>
        <div className="dropdown">
          <label className="dropdown-title" htmlFor="drop1"><i className="fa-solid fa-bars"></i></label>
          <input type="checkbox"  id="drop1"/>
          <div className="dropdown-menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">For freelancers</a></li>
                <li><Btn btnName="Get Started"/></li>
              </ul>
          </div>
        </div>

        </div>
    </header>
}

export default Nav;