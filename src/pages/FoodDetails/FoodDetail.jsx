import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import "./FoodDetail.css"
import { useState } from 'react';

const FoodDetail = () => {

   const{id} = useParams();

   const Domain = "http://localhost:8080";
   const Server = "http://3.106.127.69:8080"

   const API_URL_GET_FOOD_BY_ID = Server+"/api/getFoodById/";
   const[foodDetail,setFoodDetail] = useState(null);


   useEffect(()=>{
    const FoodService = async ()=>{     
            try{
                const response = await axios.get(API_URL_GET_FOOD_BY_ID+`${id}`)
                if (response.status === 200) {
                    setFoodDetail(response.data);
                    console.log(response.data);
                }
            }
            catch(error){
                console.log("Error"+error)          
        }
    }  
    FoodService();

    },[])
  return (
   <div>
  
    <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                     <img className="card-img-top food-detail-image" src={foodDetail?.imageUrl} alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div>
                            <div className="small mb-1">Category : <span className='badge text-bg-warning'>{foodDetail?.category}</span></div>
                        </div>
                        <h1 className="display-5 fw-bolder">{foodDetail?.name}</h1>
                        <div className="fs-5 mb-2">
                
                            <span>${foodDetail?.price}</span>
                        </div>
                        <p className="lead">
                        {foodDetail?.description}
                            </p>
                        <div className="d-flex">
                            <input className="form-control text-center me-3" id="inputQuantity" type="number"  style={{ maxWidth: '3rem' }} />
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
       
        </div>
  )
}

export default FoodDetail