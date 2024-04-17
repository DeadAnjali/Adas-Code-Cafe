'use client'
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "@/app/globals.css";
import Link from 'next/link';
import axios from "axios";
import { toast } from "react-toastify";



const Register = () => {
  const [ showPassword, setShowPassword ] = useState(false);
  const [user, setUser]=useState({
    name:'',
    regno:'',
    email:'',
    password:'',
    username:'',
  })

  const[buttonDisabled,setbuttonDisabled]=useState(false);
  const [loading,setLoading]=useState(false)

  const SignUp=async()=>{
    try {
      setLoading(true);
      let usern=user.name+"@"+user.regno;
      setUser({...user,username:usern});
      const response=await axios.post("/api/users/register",user);
      console.log("SignUp success"+response.data);
    } catch (error) {
      console.log("SignUP failed");
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  }
  
  /*
  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0 && user.name.length>0&&user.regno.length>0){
      setbuttonDisabled(false);
    }
    else{
      setbuttonDisabled(true);
    }
  }
  ,[user])*/

  return (
    <div className="register-main">
      <div className="register-left">
        <p>I am {loading?"Doing work":"Completed"}</p>
      </div>
      <div className="register-right">
        <div className="register-right-container">
          <div className="register-center">
            <h2>Join Ada's code Cafe!</h2>
            <form onSubmit={SignUp}>
            <input type="text" placeholder="Name" name="name" required={true} value={user.name}
            onChange={(e)=>setUser({
                ...user,name:e.target.value
            })} />
            <input type="text" placeholder="Registration Number" name="regno" required={true} value={user.regno}
            onChange={(e)=>setUser({
                ...user,regno:e.target.value
            })} />
              <input type="email" placeholder="Email" name="email" required={true} value={user.email}
              onChange={(e)=>setUser({
                ...user,email:e.target.value
            })}
              />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" required={true} value={user.password}
                onChange={(e)=>setUser({
                    ...user,password:e.target.value
                })}
                />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>
              <div className="register-center-buttons">
                <button type="submit" onClick={SignUp}>Sign Up</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Already have an account? <Link href="/login">{buttonDisabled?"No SignUp":"SignUp"}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
