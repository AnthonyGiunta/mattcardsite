import React, { useState } from 'react';
import './Showcase.css';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row';
import zion from '../../images/zion.jpg';
import lebron from '../../images/lebron.jpg';
import kobe from '../../images/kobe.jpg';

function Showcase() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <Row className="justify-content-center">
          <img
            className="d-block w-50 h-50"
            src={zion}
            alt="First slide"
          />
          </Row>
          <Carousel.Caption>
            <h3><span className='caption'> Zion Williamson </span></h3>
            <p><span className='caption'> Rookie cards, signed memoiribilia and more. </span></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Row className="justify-content-center">
          <img
            className="d-block w-50 h-50"
            src={kobe}
            alt="Second slide"
          />
          </Row>

          <Carousel.Caption>
            <h3><span className='caption'> Kobe </span></h3>
            <p><span className='caption'> Memorial editions </span></p>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
        <Row className="justify-content-center">
          <img
            className="d-block w-50 h-50"
            src={lebron}
            alt="Third slide"
          />
          </Row>
          <Carousel.Caption>
          <h3><span className='caption'> Lebron James </span></h3>
            <p><span className='caption'> Champion series </span></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default Showcase;