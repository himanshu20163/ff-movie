import axios from 'axios'

export const getusersdata = (setUsers) =>{
    axios.get("http://localhost:5001/results",setUsers)
    .then((res)=>{
        console.log(res);
        // alert("user suceesfully added");
        setUsers(res.data);
    })
}

export const senduserdetails = (userdata,setUsers)=>{
    axios.post("http://localhost:5001/results",userdata)
    .then((res)=>{
        console.log(res);
        alert("user suceesfully added");
        getusersdata(setUsers);
    })
    .catch((error)=>{
        console.log(error);
        alert("user are not added");
    })
}

export const deleteUserData = (id,setUsers) =>{
    axios.delete(`http://localhost:5001/results/${id}`)
    .then((res)=>{
        console.log(res);
        alert("user suceesfully deleted");
        getusersdata(setUsers);
    })
    .catch((error)=>{
        console.log(error);
        alert("user are not deleted");
    })
}
