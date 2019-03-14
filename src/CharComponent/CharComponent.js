import React from 'react';
import './CharCompo.css';

const charCompo = (props) => {
 return(
  <div className='charCompo' onClick={props.removeCharComp}>
   {props.character}
  </div>
 );
}

export default charCompo;