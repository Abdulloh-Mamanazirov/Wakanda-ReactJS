import './find.css'
import Btn from '../mini-parts/button'

function Find(){
    return (
      <section id="find">
        <div className="container">
          <div className="flex">
            <div className="half"></div>
            <div className="portion">
              <h3>What are you waiting for?</h3>
              <h2>Find the talent to get your business growing</h2>
              <Btn btnName='Get Started'/>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Find;