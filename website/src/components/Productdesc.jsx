import React from 'react'
import image1 from '../images/photo1.jpg';
import { useState } from "react";
const Productdesc = () => {
  
  const [quantity,setQuantity]=useState('1');
  
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <img src={image1} alt="..." width="500rem" height="400px" className='rounded' />
        </div>
        <div className="col-md-6">
          <h1>Towel</h1>
          <p>Thanks to advances in textile technology, it's possible for manufacturers to produce higher-quality fabrics with fewer impurities compared with those produced even 10 years ago.
          </p>
        </div>
        </div>
        <div className="row">
        <div className="col-md-12 flex-end">
            <div className="btn__container">
              <form>
                <select value={quantity}
                  onChange={(e) => {setQuantity(e.target.value)}}
                   className="btn btn-warning rounded px-4 py-2"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </form>
              <button className="btn btn-outline-info
                        rounded-pill px-4 py-2" >Add to Cart</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Productdesc
