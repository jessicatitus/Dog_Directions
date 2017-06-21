import React from 'react';

const StepTile = props => { //const can also be let

  let handleClick = () => {
    props.setSelectedStep(props.id);
  }

  return(
    <li onClick={handleClick} className={props.styleClass}>{props.step}</li>
  )
}

export default StepTile;
