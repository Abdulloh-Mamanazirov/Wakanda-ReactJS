function card({cardImg, cardTitle, cardDesc}){
    return (
      <article className="feature">
        <span className="icon-wraper">
          <img src={cardImg} alt="Feature icons" className="icon" />
        </span>
        <h3>{cardTitle}</h3>
        <p>
          {cardDesc}
        </p>
      </article>
    );
}

export default card;