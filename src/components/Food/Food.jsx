import React from 'react'
import { Link } from 'react-router-dom'

const Food = ({food}) => {
  return (
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
            <div>
                <Link className="btn btn-primary" to={`/foodDetail/${food.id}`}>View Details</Link>
            </div>
        </div>
  </div>
  )
}

export default Food