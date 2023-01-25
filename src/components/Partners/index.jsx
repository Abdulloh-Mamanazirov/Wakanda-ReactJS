import "./partners.css";
import Airbnb from "../../images/icons/Airbnb.svg";
import Google from "../../images/icons/Google.svg";
import Slack from "../../images/icons/Slack.svg";
import Netflix from "../../images/icons/Netflix.svg";
import Amazon from "../../images/icons/Amazon.svg";

function Partners() {
  return (
    <section id="partners">
      <div className="container flex">
        <div className="partners">
          <img src={Airbnb} alt="Partner" />
        </div>
        <div className="partners">
          <img src={Google} alt="Partner" />
        </div>
        <div className="partners">
          <img src={Slack} alt="Partner" />
        </div>
        <div className="partners">
          <img src={Netflix} alt="Partner" />
        </div>
        <div className="partners">
          <img src={Amazon} alt="Partner" />
        </div>
      </div>
    </section>
  );
}

export default Partners;
