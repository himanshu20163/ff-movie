import React from 'react'
import { useState } from 'react'
import { B } from './B';
import mycontext from './context';

const A = () => {
    const[ans,setans] = useState("");
    
    let data = (e)=>{
        setans(e.target.value);
    }
   
  return (
    <div>
        <input type="text" name="" id="" onChange={data}/>
        {console.log(data)}
        <mycontext.Provider value={ans}>
            <B />
        </mycontext.Provider>
    </div>
  )
}
export {mycontext,A};
