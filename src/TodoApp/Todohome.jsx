import React, { useState } from 'react'
import './todo.css';
import mytodocontextapi from './contextdata';
import Showalltask from './Showalltask';
import Editbox from './Editbox';

export const Todohome = () => {

    const [taksname, settaskname] = useState('');
    const [alldata,setalldata] = useState([]);
    const[showeditbox,seteditbox] = useState(false);

    const add_task = () => {
        setalldata([...alldata,taksname]) ;
        console.log(alldata);
    }
    return (


        <div style={{
            height: "50vh", width: "35%",
            margin: "0px auto",
        }}>
            <form action="#" style={{ maxWidth: "500px", margin: "auto" }}>
                <h2>ToDO App </h2>
                <div class="input-container">
                    <input class="input-field" type="text" placeholder="Add to .." name="addtask" onChange={(e) => {
                        settaskname(e.target.value);
                    }} />
                    <i class="fa fa-plus icon" onClick={add_task}></i>
                </div>
            </form>
           <mytodocontextapi.Provider  value={{alldata,setalldata,taksname,settaskname,seteditbox,showeditbox}}>
             <Showalltask />
             {/* <Editbox /> */}
           </mytodocontextapi.Provider>
        </div>
    )
}
