import './footer.css'
import Socials from '../mini-parts/socials'
import logo from '../../images/icons/Logo-footer.svg'
import instagram from '../../images/icons/instagram.svg'
import dribble from '../../images/icons/dribble.svg'
import twitter from '../../images/icons/twitter.svg'
import youtube from '../../images/icons/youtube.svg'
import send from "../../images/icons/send.svg";

function Footer(){
    return (
      <footer id="the-end">
        <div className="container flex">
          <div className="athird">
            <div className="logo">
              <img src={logo} alt="LOGO" />
              wakanda
            </div>

            <nav className="socials">
              <ul className="flex">
                <Socials iconSrc={instagram}/>
                <Socials iconSrc={dribble}/>
                <Socials iconSrc={twitter}/>
                <Socials iconSrc={youtube}/>
              </ul>
            </nav>
            <p>Copyright © 2022 Wakanda. All rights reserved</p>
          </div>
          <div className="portion">
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">For freelancers</a>
              </li>
            </ul>
          </div>
          <div className="portion">
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">For freelancers</a>
              </li>
            </ul>
          </div>
          <div className="aquater">
            <h2>Subscribe to our newsletter</h2>
            <form action="/newsletter">
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Your email address"
                  name="email"
                />
                <button type="submit">
                  <img src={send} alt="Submit" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    );
}

export default Footer;