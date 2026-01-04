import React from 'react'
import { useContext } from 'react'
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = () => {

  const {listFood} = useContext(StoreContext);
  return (
    <div className="container">

      <div className="row">
      {
            listFood.length>0?
            (

                listFood.map((food,index)=>{

                  return(
                
                  <div key ={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
                      <div className="card product-card">
                    <img src={food.imageUrl} className="card-img-top product-image" alt="Product Image"/>
                    <div className="card-body">
                        <h5 className="card-title product-title">{food.name}</h5>
                  
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="product-price">AUD${food.price}</span>
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <span className="ms-1 text-muted">(4.5)</span>
                            </div>
                        </div>
                        <button className="btn btn-primary w-100">Add to Cart</button>
                    </div>
                  </div>
                  </div>
                )

                }

              )
              
            ):(
              <div className="text-center mt-4">
                <h4>No food found.</h4>
              </div>    

            )

            } 
      </div>

    </div>
  )
}

export default FoodDisplay