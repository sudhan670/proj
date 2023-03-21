import React from 'react'
import portal from '../images/portal.svg';
import shopping from '../images/shopping.svg';
const services = () => {
  return (
    <div>
        <section id="service">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fs-15 text-center mb-0">Our Services</h3>
                        <h1 className="display-6 text-center mb-4">
                        <b>Awesome <b>Services</b></b></h1>
                        <hr className='w-25 mx-auto'></hr>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <div class="card p-4 ">
                            <img class="card-img-top" src={portal} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Textile Products</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div class="card p-4 ">
                            <img class="card-img-top" src={shopping} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Bill Tax Report</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div class="card p-4 ">
                            <img class="card-img-top" src={portal} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Invoice Client Report </h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default services

