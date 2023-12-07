import {INCREMENT} from '../constants'
export const addToCart =(data)=>{
  console.warn("actions", data)
    return {
        type: INCREMENT,
        state: data
    }
}
