import React from "react";
import './UserPages.css';
import {useEffect, useState} from 'react';

const Userpages = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [userName, setUserName]=useState("");
    const [website,setWebsite]=useState("")
    function saveUser(){
        console.log({name,email,userName,website})
        let data = {name,email,userName,website};  //destructure hoice ekhane
        // console.log(data)
        fetch("https://jsonplaceholder.typicode.com/users",{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
        },
        body:JSON.strangify(data)
         }).then((result)=>{
             result.json().then((resp)=>{
                 console.warn("resp",resp)
             })
         })

    }


    
  return (
    <div>
      <div className="user-create mb-5 d-flex align-items-center flex-column">
        <h2 className="py-3">User data create: </h2>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="enter user name: "></input>
         <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter user email: "></input>
        <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} placeholder="enter user username: "></input>
        <input type="text" value={website} onChange={(e)=>{setWebsite(e.target.value)}} placeholder="enter user website: "></input>
        <button className="rounded rounded-3 rounded-pil py-2 px-5 fs-6 bg-success text-light" type="button" onClick={saveUser}>Save</button>
      </div>
    </div>
  );
};

export default Userpages;
