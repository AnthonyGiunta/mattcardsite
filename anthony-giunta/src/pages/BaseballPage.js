import React from 'react';
import Hero from '../components/Hero';

function BaseballPage(props){
    return(
        <div bg="transparent">

          <p>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
          </p>
        </div>

    );
}

export default BaseballPage;