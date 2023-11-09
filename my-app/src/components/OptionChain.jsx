import React, { useEffect, useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import getData from './redux/action/bn_action.js'
const OptionChain = () => {
  const dispatch=useDispatch()
  const {loading,data,error}=useSelector(state=>state.bnOption);
    const [item,setItem]=useState([]);
    dispatch(getData());
useEffect(()=>{
  
 // console.log(data)
  setItem(data)
},[item])    
  return (
    <>
        <div className="py-3 bg-green-400 w-full sticky">
            Navbar
        </div>
        {/* {
          item.map((ele)=>{
            return <>
                    <div>{ele}</div>
                   </>
          }) }*/
        }

        {/* option chain table */}
        <div className="p-4">
            <table className="bg-red-400 w-full">
              <thead>
                 <tr className="">
                    <th>OI</th>
                    <th>VOL</th>
                    <th>LTP</th>
                    <th>STRK</th>
                    <th>LTP</th>
                    <th>VOL</th>
                    <th>OI</th>
                 </tr>
              </thead>
              <tbody>
              
             </tbody>
          </table>
        </div>
    </>
  )
}

export default OptionChain