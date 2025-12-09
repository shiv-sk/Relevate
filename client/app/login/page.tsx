"use client";
import LoginForm from "@/components/forms/loginForm";
import { Login as LoginInterface } from "@/interfaces/loginInterface";
import { useState } from "react";

export default function Login(){
    const [form, setForm] = useState<LoginInterface>({email:"", password:""});

    const handleOnChange = (key: string, value: string)=>{
        setForm({...form, [key]: value});
    }
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("the button is clicked with form data", form);
    }
    return(
        <div className="min-h-screen gap-4 py-36 bg-base-300">
            <LoginForm onChange={handleOnChange} form={form} onSubmit={handleOnSubmit} />
        </div>
    )
}