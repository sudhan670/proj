import React from 'react'
import image1 from '../images/photo1.jpg';
import { useState } from "react";
const Productdesc = () => {
  //increase counter
  const [counter, setCounter] = useState();
  const increase = () => {
    setCounter(count => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <img src={image1} alt="..." width="500rem" height="400px" className='rounded' />
        </div>
        <div className="col-md-4">
        <h1>Towel</h1>
              <p>Thanks to advances in textile technology, it's possible for manufacturers to produce higher-quality fabrics with fewer impurities compared with those produced even 10 years ago.
              </p>
        </div>
        <div className="col-md-12">
           
              
            <div className="counter col-md-4">
              <span className="counter__output">{counter}</span>
              <div className="btn__container">
                <button className="control_btn rounded ">Add to Cart</button>
                <button className="control__btn rounded" onClick={increase}>+</button>
                <button className="control__btn rounded" onClick={decrease}>-</button>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Productdesc