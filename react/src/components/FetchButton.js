import React from 'react';

const FetchButton = props => {

let clickHandler = () => {
  props.fetchStuff()
}
  return(
    <button onClick={clickHandler}>Get Favorite Thing</button>
  )
}

export default FetchButton;
