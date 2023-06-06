// import react from "@vitejs/plugin-react-swc";
import React, {useState } from "react";

import '../../assets/css/Userlogin.css';
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    const [userEmail, setuserEmail] = useState('');
    const [userPassword, setuserPassword] = useState('');

    const navigate = useNavigate();
    const navigatetoBikes=()=>{
        navigate('/bikes');
    }

    return(
       <div className="user-login">
            <form>
                <input 
                    type="text"
                    name="Email"
                    placeholder="Email"
                    onChange={(e)=>{
                        setuserEmail(e.target.value);
                    }} required
                    />
                    <input 
                        type="password"
                        name="Password"
                        placeholder="Password"
                        onChange={(e)=>{
                            setuserPassword(e.target.value);
                        }} required
                        />
                        <button onClick={navigatetoBikes}>Login</button>
                        <a href="/register">Don't have an account</a>
            </form>
       </div>
    );
};
export default UserLogin;