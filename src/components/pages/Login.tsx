import React, { useState } from 'react';
import { ActionButton, Input } from "..";
import Circle from "../../assets/svgs/circle.svg";
import {LoginService} from '../../services/api/hfAppServer/UserLoginService'
import { apiServer } from '../../services/api/hfAppServer/axiosConfig';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        try {

          // Call the userLogin function from LoginService
          const result = await LoginService(apiServer).userLogin(email, password);
          console.log('result:', result)
          // Handle the result as needed
          if (result) {
            // Successful login, you can now handle the result or update state/context
            console.log("Login successful:", result);
          } else {
            // Handle the case where the login was not successful
            console.log("Login failed:", result);
          }
        } catch (error) {
          // Handle any unexpected errors
          console.error("Error during login:", error);
        }
      };

    return (
        <div className="flex flex-col h-screen md:flex-row">
            <div className="bg-primary flex-1 flex overflow-hidden">
                <h1 className="text-4xl font-bold text-background mt-auto ml-4 mb-4 lg:ml-12 lg:mb-12 lg:text-5xl">
                    hack <br /> fake
                </h1>
                <img
                    src={Circle}
                    alt="Two tone circle"
                    className="w-[320px] h-[320px] lg:w-[640px] lg:h-[640px] ml-auto -mr-32 mt-auto -mb-32 lg:-mr-64 lg:-mb-64"
                />
            </div>

            <div className="w-11/12 mx-auto py-8 md:w-2/5 md:py-0 my-auto md:px-8 lg:px-16 md:flex md:flex-col md:gap-6">
                <h1 className="text-3xl font-bold hidden md:block">Welcome!</h1>
                <form className="flex flex-col gap-4" method="POST" >
                    <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    <ActionButton text="Next" type="submit" onClick={(e) => handleLogin(e)} />
                </form>
            </div>
        </div>
    );
}

export default Login;
