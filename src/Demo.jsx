import React from 'react'

const Demo = props => {
  return (
    <div style={{
        height:'50vh',
        width:'50%',
        boxShadow:'2px 2px 3px black',
        border:'2px solid red',
        margin :'10px auto',

    }}>
        <div >
        <h1>New user</h1>
        <div>
        <label>Male</label>
        <input type='radio' id="male" name='gender' placeholder='enter your name' value='male'/>

        <input type="radio" id="female" name='gender' value='female'>
        </input>

        <label>Female</label>
        </div>
        <div>
        </div>
        </div>   
        <button>Submit</button>
        </div>
        
  )
}


export default Demo