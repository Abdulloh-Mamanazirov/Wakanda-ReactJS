function step({stepNum, stepDesc}){
    return (
      <li>
        <span className="counter">{stepNum}</span>{stepDesc}
      </li>
    );
}
export default step;