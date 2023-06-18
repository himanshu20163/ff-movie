import React, { useContext } from 'react'
import mycontext from './github_context';
// import mycontext from '../ContextApi/context'


export const Profile = () => {
    const mygithubdata = useContext(mycontext);
    console.log(mygithubdata);
  return (
    <div style={{height:"250px",width:"75%",border:"2px solid red"}}>
        <img src={mygithubdata.avatar_url} height="100px" width="100px"/>
         <h2>{mygithubdata.login}</h2>
         <p>lore</p>  
    </div>
  )
}
