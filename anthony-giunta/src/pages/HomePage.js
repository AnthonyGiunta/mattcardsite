import React from 'react';
import Hero from '../components/Hero';
import Temp from '../components/template/templatebg'
function HomePage(props){
    return(
        <div bg="transparent">

          <p>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
          </p>
        </div>

    );
}

export default HomePage;