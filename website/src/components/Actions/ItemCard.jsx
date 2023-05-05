import React from 'react'

const ItemCard = (props) => {
    
  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
        <div className="card p-0 overflow-hidden h-100 shadow">
            <img src={props.img} className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">{props.title}text</h5>
                <p className="card-text">{props.desc}</p>
                <button className="btn btn-success">Add to Cart</button>
                
              </div>
        </div>
    </div>
  )
}

export default ItemCard