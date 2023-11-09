export const FETCH_REQUEST="FETCH_REQUEST";
export const FETCH_SUCCESS="FETCH_SUCCESS"
export const FETCH_FAILED="FETCH_FAILED";
import axios from 'axios'
 const getData=()=>async(dispatch)=>{
    try{
        dispatch({type:'FETCH_REQUEST'})
       const res=  await axios.get('http://localhost:8080/new')
       console.log(res.data.records.data)
        dispatch({type:"FETCH_SUCCESS",payload:res.data.records.data});
    }catch(error){
        dispatch({type:"FETCH_FAILED",payload:error.message})
    }
}

export default getData;