import React from 'react'
import ItemCard from './ItemCard';
import data from './data';

const Home = () => {
    console.warn(data.productData)
  return (
    <>
      <h5 className="text-center mt-3">New Images</h5>
      <section className="py-4 container">
          <div className="row justify-content-center">
            {data.productData.map((item,index)=>{
                return(
                    <ItemCard img={item.img} title={item.title} desc={item.desc} key={index}/>
                )
            })}
            
          </div>
          
      </section>
    </>
  )
}

export default Home