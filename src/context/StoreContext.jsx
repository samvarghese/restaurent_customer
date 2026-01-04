import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const Domain = "http://localhost:8080";
const Server = "http://3.106.127.69:8080"

const API_URL_LIST_FOOD = Server+"/api/getAllFood";


export const StoreContextProvider = (props)=> {

    const [listFood,setListFood] = useState([])

    const contextValue = {
        listFood
    }

    useEffect(()=>{
        listFoodService();
    },[])   


    const listFoodService = async ()=>{     
            try{
                const response = await axios.get(API_URL_LIST_FOOD)
                if (response.status === 200) {
                    setListFood(response.data);
                    console.log(response.data);
                }
            }
            catch(error){
                console.log("Error"+error)          
        }
    }    

    return(
        <StoreContext.Provider value={contextValue}>
                {props.children}
        </StoreContext.Provider>
    )
}
