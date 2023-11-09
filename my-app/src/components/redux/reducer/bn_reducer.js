import { FETCH_REQUEST,FETCH_SUCCESS,FETCH_FAILED} from "../action/bn_action";


const intialState={
    loading:false,
    data:[],
    error:null,
}
 const fetchReducer=async(state=intialState,action)=>{
    switch(action.type){
        case FETCH_REQUEST :
            return{          
                loading:true,
                data:[],
                error:null
            }
        case FETCH_SUCCESS :
            return{
                loading:false,
                data:action.payload,
                error:null
            }
        case FETCH_FAILED :
           return {
                loading:false,
                data:[],
                error:action.payload
            }       
        default :
            return state;     
    }

}


export default fetchReducer;