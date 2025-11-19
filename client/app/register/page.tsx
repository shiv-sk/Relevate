"use client";
import RegisterForm from "@/components/forms/registerForm";
import { useState } from "react";

export default function Register(){
    const [form, setForm] = useState({email:"", password:"", name:"", role:""});

    const handleOnChange = (key: string, value: string)=>{
        setForm({...form, [key]: value});
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        console.log("the button is clicked with form data", form);
    }
    return(
        <div className="min-h-screen gap-4 py-36 bg-base-300">
            <RegisterForm onChange={handleOnChange} form={form} onSubmit={handleOnSubmit} />
        </div>
    )
}