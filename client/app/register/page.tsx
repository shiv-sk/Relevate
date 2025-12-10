"use client";
import RegisterForm from "@/components/forms/registerForm";
import { useAuth } from "@/context/authcontext";
import { Register as RegisterInterface } from "@/interfaces/registerInterface";
import { useState } from "react";

export default function Register(){
    const {registerUser, isLoading} = useAuth();
    const [form, setForm] = useState<RegisterInterface>({email:"", password:"", name:"", role:""});

    const handleOnChange = (key: string, value: string)=>{
        setForm({...form, [key]: value});
    }
    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const { success, error } = await registerUser(form);
        if(!success){
            alert(error);
        }
    }
    return(
        <div className="min-h-screen gap-4 py-36 bg-base-300">
            <RegisterForm 
            onChange={handleOnChange} 
            form={form} 
            onSubmit={handleOnSubmit}
            isLoading={isLoading} />
        </div>
    )
}