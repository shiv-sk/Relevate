"use client";
import { Register } from "@/interfaces/registerInterface";
import BaseButton from "./baseButton";
import BaseInput from "./baseInput";
import Redirect from "./redirectPage";
import React from "react";
import BaseSelect from "./baseSelect";
import { UserRole } from "@/constants/userConstant";

export default function RegisterForm(
    {onChange, form, onSubmit}: 
    {onChange: (key: string, value: string)=>void, form: Register, onSubmit: (e: React.FormEvent<HTMLFormElement>)=>void}){
    return(
        <div className="bg-base-100 flex justify-center items-center max-w-sm w-full p-6 rounded-lg shadow-lg mx-auto flex-col">
            <h1 className="text-center font-bold text-2xl underline">Register</h1>
            <div>
                <form className="gap-2.5 py-6 space-y-3 w-full" onSubmit={onSubmit}>
                    <BaseInput 
                    label="Username" 
                    type="text" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>onChange("name", e.target.value)} 
                    value={form.name} 
                    placeholder="John Doe" />
                    
                    <BaseInput 
                    label="Email" 
                    type="text" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange("email", e.target.value)} 
                    value={form.email} 
                    placeholder="exp123@email.com" />

                    <BaseInput 
                    label="Password" 
                    type="password" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange("password", e.target.value)} 
                    value={form.password} 
                    placeholder="Pass@123" />

                    <BaseSelect 
                    option={[UserRole.Employer, UserRole.JobSeeker]} 
                    label={"Role"} 
                    value={form.role} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange("role", e.target.value)}/>

                    <Redirect url={"/login"} name={"Login"} text={"Already Have An Account"} />
                    <BaseButton type="submit" text="Register" className="btn btn-primary py-2.5 px-2 w-full"/>
                </form>
            </div>
        </div>
    )
}