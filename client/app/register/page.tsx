"use client";
import RegisterForm from "@/components/forms/registerForm";
import { useAuth } from "@/context/authcontext";
import { Register as RegisterInterface } from "@/interfaces/registerInterface";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register(){
    const router = useRouter();
    const {registerUser, isLoading} = useAuth();
    const [form, setForm] = useState<RegisterInterface>({email:"", password:"", name:"", role:""});

    const handleOnChange = (key: string, value: string)=>{
        setForm({...form, [key]: value});
    }
    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            const response = await registerUser(form);
            if(response.success && response.data){
                router.push("/login");
            }
        } catch (error) {
            console.log("error from loginPage!", error);
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