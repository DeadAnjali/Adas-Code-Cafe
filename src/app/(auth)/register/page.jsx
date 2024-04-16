'use client'
import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "@/app/globals.css";
import Link from 'next/link';
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";



const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);
  const [user, setUser]=useState({
    name:'',
    regno:'',
    email:'',
    password:'',
    username:'',
  })
  const SignUp=async()=>{

  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let lastname = e.target.lastname.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;

    if(name.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0){

      if(password === confirmPassword){
        const formData = {
          username: name + " " + lastname,
          email,
          password
        };
        try{
        const response = await axios.post("http://localhost:3000/api/v1/register", formData);
         toast.success("Registration successfull");
       }catch(err){
         toast.error(err.message);
       }
      }else{
        toast.error("Passwords don't match");
      }
    

    }else{
      toast.error("Please fill all inputs");
    }


  }


  return (
    <div className="register-main">
      <div className="register-left">
        <img src="../assets/image.png" className="h-full " alt="" />
      </div>
      <div className="register-right">
        <div className="register-right-container">
          <div className="register-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="register-center">
            <h2>Join Ada's code Cafe!</h2>
            <form onSubmit={handleRegisterSubmit}>
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
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Confirm Password" name="confirmPassword" required={true} />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>
              <div className="register-center-buttons">
                <button type="submit" onClick={SignUp}>Sign Up</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
