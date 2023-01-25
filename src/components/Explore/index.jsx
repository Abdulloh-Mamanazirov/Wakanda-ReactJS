import "./explore.css";
import explore from '../../images/explore.png';
import Btn from '../mini-parts/button'

function Explore(){
    return (
      <section id="explore">
        <div className="container flex">
          <div className="portion">
            <h2>Explore and hire talent from our platform</h2>
            <p>
              We've got experts for every industry - all under one roof! You can
              find everything from WordPress developers to Graphic designers to
              copywriters and many more at Wakanda.
            </p>
            <Btn btnName='Explore Now'/>
          </div>
          <div className="portion">
            <img src={explore} alt="explore talents" />
          </div>
        </div>
      </section>
    );
}

export default Explore;
