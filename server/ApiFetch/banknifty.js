import axios from "axios";

const fetchBN=async()=>{
  try{
        const res=await axios.get('https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY')
        return res;
    }catch(err){
    console.log(err)
  }
}

const Banknifty =fetchBN()
export default Banknifty;