'use client'
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "@/app/globals.css";
import Link from 'next/link';
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import { useRouter } from "next/navigation";



const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);
  const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const LoginUp = async (e:any) => {
      e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);
  

  return (
    <div className="register-main bg-blue-500">
      <div className="register-left">
      <p>I am {loading?"Doing work":"Completed"}</p>
      </div>
      <div className="register-right">
        <div className="register-right-container">
          <div className="register-center">
            <h2>Login here Ada's code Cafe!</h2>
            <form onSubmit={LoginUp} method="post">
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
