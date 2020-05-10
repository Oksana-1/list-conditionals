import React from 'react';

const CharComponent = (props) => {
  return (
    <div className="char"
      onClick={props.deleteMe}>{props.charSymbol}
    </div>
  )
}
export default CharComponent;