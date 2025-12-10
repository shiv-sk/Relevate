"use client";

import LoginForm from "@/components/forms/loginForm";
import { useAuth } from "@/context/authcontext";
import { Login as LoginInterface } from "@/interfaces/loginInterface";
import { useState } from "react";

export default function Login(){
    const [form, setForm] = useState<LoginInterface>({email:"", password:""});
    const {loginUser, isLoading} = useAuth();

    const handleOnChange = (key: string, value: string)=>{
        setForm({...form, [key]: value});
    }
    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            const response = await loginUser(form);
            console.log("the response from loginPage!", response);
        } catch (error) {
            console.log("error from loginPage!", error);
        }
    }
    return(
        <div className="min-h-screen gap-4 py-36 bg-base-300">
            <LoginForm 
            onChange={handleOnChange} 
            form={form} 
            onSubmit={handleOnSubmit} 
            isLoading={isLoading}/>
        </div>
    )
}