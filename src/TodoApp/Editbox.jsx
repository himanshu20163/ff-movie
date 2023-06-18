import React, { useContext, useState } from 'react'
import mytodocontextapi from './contextdata';

const Editbox = (props) => {
    const getdata = useContext(mytodocontextapi);
    const[updtvalue,setupdtvalue] = useState('');
    
    const updatetask = (id)=>{
        const updtrow = getdata.alldata.filter((e,i)=>{
            return  id != i;
        });
        console.log(updtrow);
        getdata.settaskname(updtvalue);
        getdata.setalldata(updtrow);
        getdata.seteditbox(false);

        console.log(getdata);  
    }

  return (
    <div>
        <input type="text" name="" id="" onChange={(e)=>{
            setupdtvalue(e.target.value);   
        }}/>
        <button onClick={()=>updatetask(props.id)}>Update</button>
    </div>
  )
}

export default Editbox