import React from 'react';
import Tilt from 'react-parallax-tilt';
import './cv.scss';
import book from '../../assets/images/book-alt2.png'

const CV = () => {
  return (
    <div>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 90, width: 105 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='cv' src={book} width='150px' height= '150px' title='CV'/>
        </div>
      </Tilt>
    </div>
  );
}

export default CV;