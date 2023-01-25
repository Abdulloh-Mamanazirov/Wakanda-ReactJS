import "./features.css";
import Card from '../mini-parts/feature-card'
import award from "../../images/icons/award.svg";
import headphones from "../../images/icons/headphones.svg";
import verified_user from "../../images/icons/verified_user.svg";

function Features() {
  return (
    <section id="feature">
      <div className="container">
        <h5>feature</h5>
        <h2>The benefit of using our platform</h2>
        <div className="flex">
          <Card
            cardImg={award}
            cardTitle="Professional & Fast"
            cardDesc="Search and hire the most talented freelancers to match your needs.
              No matter what you need done, we've got the perfect freelancer for
              you."
          />
          <Card
            cardImg={headphones}
            cardTitle="Professional & Fast"
            cardDesc="Search and hire the most talented freelancers to match your needs.
              No matter what you need done, we've got the perfect freelancer for
              you."
          />
          <Card
            cardImg={verified_user}
            cardTitle="Professional & Fast"
            cardDesc="Search and hire the most talented freelancers to match your needs.
              No matter what you need done, we've got the perfect freelancer for
              you."
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
