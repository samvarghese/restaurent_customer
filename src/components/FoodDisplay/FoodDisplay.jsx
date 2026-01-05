import React from 'react'
import { useContext } from 'react'
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext'
import Food from '../Food/Food';

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
                     <Food food={food}></Food>
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