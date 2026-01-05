import React, { Fragment } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
const Explore = () => {
  return (
   
      <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                  <form>
                    <div className="input-group mb-3">
                      <select className='form-select mt-2' style={{'maxwidth':'150px'}}>
                        <option value="">Please Select your Fav Food ...</option>
                        <option value="Biryani">Biryani</option>
                        <option value="Juices">Juices</option>
                        <option value="Ice Cream">Ice Cream</option>
                        <option value="Burgers">Burgers</option>
                        <option value="Salads">Salads</option>
                        <option value="Rolls">Rolls</option>
                      </select>
                      <input type="text" className="form-control mt-2" placeholder='Serach a food'/>
                      <button  type="submit" className='btn btn-primary mt-2'><i className='btn bi-search'></i></button>
                    </div>
                  </form>
                </div>
            </div>  
            <FoodDisplay></FoodDisplay>  
      </div>
 
  )
}

export default Explore