import * as actionTypes from "./actionType";
import axios from "axios";

export function getProductById(id){
    console.log("geliyor mu");
    return async (dispacth) => {
        return await axios
          .get("https://northwind.now.sh/api/products/"+id)
          .then((response) => {
            dispacth(getProductByIdSuccess(response.data));
          });
      };
}

function getProductByIdSuccess(data){
    console.log(data)
    return{
        type:actionTypes.SETPRODUCT,
        payload:data
    }
}