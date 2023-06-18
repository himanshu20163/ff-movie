import React from 'react'
import { useState,useEffect } from 'react';

const Users = () => {

    const[user,setUser] = useState([]);
    const[state,setState] = useState([]);
   
    const get_users=()=>{
        fetch('https://randomuser.me/api/?results=10')
        .then((res) => res.json())
        .then((data)=>{
            console.log(data.results);
            setUser(data.results);
            setState(data.results);
            // console.log(`usestate ${user}`);
        })
        .catch((e) =>{
            console.log(e);
        });
    };
  return (
    //https://randomuser.me/api/?results=5000
    <div style={{width:'100%',height:'100vh'}}>
        <p style={{padding:'30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium itaque aliquam quidem iusto iure perspiciatis vero, dolore culpa sequi exercitationem tempore quas labore repellat autem officiis rerum quisquam sit vitae!</p>
        <button onClick={get_users}>Get data </button>
       {
        user.length>0 && 
        <div style={{padding:"20px"}}>
            <label>All</label>
            <input type="radio" value ="all" name="gender" id="gender" defaultChecked onChange={()=>{
                setUser(state);
            }}/>
            <label>female</label>
            <input type="radio" value="female" name="gender" id="male" onChange={()=>{
                setUser(state.filter((data)=>  data.gender === "female"))
            }}/>
            <label>male</label>
            <input type="radio" value="male" name="gender" id="female" onChange={()=>{
                setUser(state.filter((data)=> data.gender === "male"))
            }}
            />
            </div> 
       }
       
        {
            user.length>0 &&  (<table width='100%' frame="box" rules='all'>
            <thead>
                <tr>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>EMAIL</th>
                    <th>CITY</th>
                </tr>
            </thead>
            <tbody>
                {

                    user.map((e)=>{
                        return(
                            <tr>
                                <td>
                                    <img src={e.picture.medium} width='100' height={100} />
                                </td>
                                <td>
                                    {e.name.first}{e.name.last}
                                </td>
                                <td>
                                    {e.gender}
                                </td>
                                <td>
                                    {e.location.city}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
            )
        }
       
    </div>
  )
}

export default Users