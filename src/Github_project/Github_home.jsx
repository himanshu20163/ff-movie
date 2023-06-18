import React, { useState } from 'react'
import { Profile } from './Profile'
import User_detail from './User_detail'
import axios from 'axios'
import mycontext from './github_context'


export const Github_home = () => {

  const[userdata,setuserdata] = useState([]);
  const[username,setusername] = useState('');

  const getsearchdata = (ele)=>{
    axios.get(`https://api.github.com/users/${ele}`)
    .then((res)=>{
      setuserdata(res.data);
      console.log(userdata);
    })
    .catch(()=>{
      console.log(Error);
    })
  }

  return (
    <div>
        <div >
           <div>
            <input type="text" name="" id="" onChange={(e)=>{
              setusername(e.target.value);
            }}/>
            <button onClick={()=>getsearchdata(username)}>Submit</button>
           </div>
           <div style={{width:"350px",height:"300px",display:"flex"}}>
            <mycontext.Provider value={userdata}>
               <Profile />
               <User_detail /> 
            </mycontext.Provider>    
           </div>
        </div>
    </div>
  )
}
