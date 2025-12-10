"use client";
import { Login } from "@/interfaces/loginInterface";
import BaseButton from "./baseButton";
import BaseInput from "./baseInput";
import Redirect from "./redirectPage";
import React from "react";

export default function LoginForm(
    {onChange, form, onSubmit, isLoading}: 
    {
        onChange: (key: string, value: string)=>void, 
        form: Login, 
        onSubmit: (e: React.FormEvent<HTMLFormElement>)=>void,
        isLoading: boolean
    }){
    return(
        <div className="bg-base-100 flex justify-center items-center max-w-sm w-full p-6 rounded-lg shadow-lg mx-auto flex-col">
            <h1 className="text-center font-bold text-2xl underline">Login</h1>
            <div>
                <form action="" className="gap-2.5 py-6 space-y-3 w-full" onSubmit={(e)=>onSubmit(e)}>
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
                    <Redirect url={"/register"} name={"Register"} text={"New to Relevate"}/>
                    <BaseButton 
                    type="submit" 
                    text="Login"
                    isLoading={isLoading} 
                    className="btn btn-primary py-2.5 px-2 w-full"/>
                </form>
            </div>
        </div>
    )
}