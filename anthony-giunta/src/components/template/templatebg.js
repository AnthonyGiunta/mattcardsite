import React from 'react';
import './templatebg.css';
import temp from '../../images/template.svg';
 
function Temp(props){
    return <img
      src={temp}
      className="temp"
      alt="temp"
    />;
}

export default Temp