import React, { useState } from 'react'
import Login from './Login';
import Home from './Home';

const Login_home = () => {

    const[islogin,setlogin] = useState(false);

    const login = ()=>{
          setlogin(true);
    }
    const logout = ()=>{
        setlogin(false);
    }
  return (
    <div>
            islogin  : <Login /> ? <Home />
    </div>
  )
}

export default Login_home