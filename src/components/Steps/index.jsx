import './steps.css'
import windowImage from '../../images/window.png'
import Step from '../mini-parts/step'

function Steps(){
    return (
      <section id="steps">
        <div className="container flex">
          <div className="portion">
            <img src={windowImage} alt="Window" />
          </div>
          <div className="portion">
            <h2>Wakanda is an easy platform to find talent</h2>
            <ol>
              <Step stepNum="1" stepDesc="Lorem ipsum dolor sit amet." />
              <Step stepNum="2" stepDesc="Atque ipsa a non aspernatur." />
              <Step stepNum="3" stepDesc="Voluptas quidem porro a omnis." />
              <Step stepNum="4" stepDesc="Porro tenetur dolorem
                architecto inventore?" />
              <Step stepNum="5" stepDesc="Laborum voluptatibus
                cupiditate fugiat fugit?" />
            </ol>
          </div>
        </div>
      </section>
    );
}

export default Steps