import avatar from '../../images/Avatar.png'
import star from '../../images/icons/star.svg'

function testimonialCard(){
    return (
      <article>
      <div className="flex">
        <img src={avatar} alt="User image" />
        <div>
          <h4>Cara Bedford</h4>
          <div className="flex">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
            <p>
              I have been using Wakanda for quite some time now and I have to
              say it has been the best freelance hiring platform that I've used.
              The quality of freelancers on this site is very high and they're
              totally reliable. I would highly recommend it!
            </p>
      </article>
    );
}

export default testimonialCard;