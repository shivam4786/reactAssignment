import React from 'react';

const validation = (props) => {
  let str = '';
  if (props.length < 1) {
   str = null;
  }
  else if (props.length > 5) {
   str = <p>Text Entered is Long</p>
  }
  else {
   str = <p>Text Entered is Short</p>
  }
  return (
   <div>{str}</div>
  );
}

export default validation;