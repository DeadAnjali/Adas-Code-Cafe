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
  const LoginUp=async()=>{

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
            <h2>Login here Ada's code Cafe!</h2>
            <form onSubmit={LoginUp}>
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
                <button type="submit" onClick={LoginUp}>Login</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <Link href="/register">SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
