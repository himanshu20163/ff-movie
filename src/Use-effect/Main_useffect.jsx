import React, { useState } from 'react'
import { Textcomponent } from './Textcomponent';
import { Imagecomponent } from './Imagecomponent';

export const Main_useffect = () => {
    const[checkdata,setcheckdata] = useState(true);

  return (
    <div style={{height:"60vh",width:"450px",boxShadow:"2px 2px 2px black"}}>
        <button onClick={()=>{
            setcheckdata(false);
        }}>Text Component</button>
        <button onClick={()=>{
            setcheckdata(true);
        }}>Image Component</button>
        {
            checkdata ? <Imagecomponent /> : <Textcomponent />
        }
       
    </div>
  )
}
