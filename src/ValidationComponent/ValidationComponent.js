import React from 'react';
const ValidationComponent = (props) => {
  const validationText = props.textLength < 5
      ? 'Text too short'
      : 'Text long enough';
  const validationError = props.textLength < 5;
    return (
      <div className="validation-wrap">
        <p className={validationError?'error':''}>{validationText}</p>
      </div>
    );
}

export default ValidationComponent;
