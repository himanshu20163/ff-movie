import React, { useContext } from 'react'
import {mycontext} from './A'


export const B = () => {
    const user = useContext(mycontext);

  return (
    <div>
       <h2>
       {user}
        </h2> 
    </div>
  )
}
