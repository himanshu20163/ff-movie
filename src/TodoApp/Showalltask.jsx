import React, { useContext, useState } from 'react'
import mytodocontextapi from './contextdata'
import './alltask.css';
import Editbox from './Editbox';
// import Editbox from './Editbox';

const Showalltask = () => {
  const [isChecked, setIsChecked] = useState(false);

    const mytodolist = useContext(mytodocontextapi);

    const delete_task = (ele)=>{
       let result = mytodolist.alldata.filter((e,i)=>{
        return ele !=i;
       });
       mytodolist.setalldata(result);
    }
    // console.log(mytodolist.showeditbox);
    const edit_task = (ele)=>{
      const updattaks = [...mytodolist.alldata];
      updattaks[ele] = prompt('Enter the updated task', mytodolist.alldata[ele]);
      mytodolist.setalldata(updattaks);
   }

   const setmark = ()=>{
       setIsChecked(true);
       alert("marked!!");
   }
  return (
    <div>
        {
          mytodolist.alldata.map((e,i)=>{
            return(
                <div className='list-box' key={i}>
                    <div className='list-left'>
                    <input type="checkbox" name="" id="" checked={isChecked} onChange={setmark}/>
                    <h3>{e}</h3>
                    </div>
                    <div className='list-right'>
                    <i className='fa fa-edit' onClick={()=>edit_task(i)}></i>
                    <i className='fa fa-trash' onClick={()=>delete_task(i)}></i>
                    </div> 
                     
                </div>
            )
          })
        }
    </div>
  )
}

export default Showalltask