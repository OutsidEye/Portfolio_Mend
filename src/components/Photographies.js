import React from 'react';
import picture1 from '../images/picture1.jpg';
import picture2 from '../images/picture2.jpg';
import picture3 from '../images/picture3.jpg';
import picture4 from '../images/picture4.jpg';
import picture5 from '../images/picture5.jpg';
import picture6 from '../images/picture6.jpg';
import picture7 from '../images/picture7.jpg';
import picture8 from '../images/picture8.jpg';
import picture9 from '../images/picture9.jpg';
import picture10 from '../images/picture10.jpg';
import picture11 from '../images/picture11.jpg';
import picture12 from '../images/picture12.jpg';
import picture13 from '../images/picture13.jpg';
import picture14 from '../images/picture14.jpg';


const Photographie = () => {
    return (
      <div className="photos__background">
        <h2 className="photos__title">Photographies</h2>
        <div className="photos__container">
          <img src={ picture1 } alt={""} className="photo__box" />
          <img src={ picture2 } alt={""} className="photo__box" />
          <img src={ picture3 } alt={""} className="photo__box" />
          <img src={ picture4 } alt={""} className="photo__box" />
          <img src={ picture5 } alt={""} className="photo__box" />
          <img src={ picture6 } alt={""} className="photo__box" />
          <img src={ picture7 } alt={""} className="photo__box" />
          <img src={ picture8 } alt={""} className="photo__box" />
          <img src={ picture9 } alt={""} className="photo__box" />
          <img src={ picture10 } alt={""} className="photo__box" />
          <img src={ picture11 } alt={""} className="photo__box" />
          <img src={ picture12 } alt={""} className="photo__box" />
          <img src={ picture13 } alt={""} className="photo__box" />
          <img src={ picture14 } alt={""} className="photo__box" />
        </div>
      </div>
    )
}

export default Photographie;
