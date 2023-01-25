import "./showcase.css";
import Btn from "../mini-parts/button";
import showcase from "../../images/showcase.png";

function Showcase() {
  return (
    <section id="showcase">
      <div className="container flex">
        <div className="portion showcase-text">
          <h1>Recruit top talented freelancer for your business</h1>
          <p>
            Connect you to thoudsands of talented freelancer from any industry.
            You can have the best people in just few simple steps.
          </p>
          <Btn btnName="Get Started"/>
        </div>
        <div className="portion">
          <img src={showcase} width={540} alt="Showcase" />
        </div>
      </div>
    </section>
  );
}

export default Showcase;
