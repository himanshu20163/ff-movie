import React, { useState } from 'react'
import {senduserdetails,getusersdata,deleteUserData} from '../API/Api_user';

const User = () => {
    const[user,setUser] = useState("");
    const[gender,setGender] = useState("");
    const[users,setUsers] = useState([]);

    const adduserdata = ()=>{
        console.log(user,gender);
        let newuser = {
            name:user,
            gender:gender,
        };
        senduserdetails(newuser,setUsers);
    }

    const getuserdata = ()=>{
        getusersdata(setUsers);
    }

    const deleteUser = (id) =>{
      deleteUserData(id,setUsers)
    }

  return (
    <div style={{width:"250px",height:"150px",boxShadow:"2px 2px 2px black"}}>
    
       <input type='text' onChange={(e)=>{
        setUser(e.target.value);
       }} placeholder='name'/>
       <input type='text' onChange={(e)=>{
        setGender(e.target.value);
       }} placeholder='select gender'/>
       <button onClick={adduserdata}>Submit</button>
       <button onClick={getuserdata}>Get data</button>

       <div>
        {
            users.length > 0 && 
            <table>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
            </thead>
            <tbody>
                  {
                    users.map((e)=>{
                        return(
                            <tr>
                                <td>
                                    {e.name}
                                </td>
                                <td>
                                    {e.gender}
                                </td>
                                <td>
                                   <button onClick={()=>{
                                    deleteUser(e.id)
                                   }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                  }
            </tbody>
          </table>
        }
          
       </div>
    </div>
  )
}

export default User