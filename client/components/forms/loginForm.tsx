"use client";
import BaseButton from "./baseButton";
import BaseInput from "./baseInput";
import Redirect from "./redirectPage";

export default function LoginForm({onChange, form, onSubmit}){
    return(
        <div className="bg-base-100 flex justify-center items-center max-w-sm w-full p-6 rounded-lg shadow-lg mx-auto flex-col">
            <h1 className="text-center font-bold text-2xl underline">Login</h1>
            <div>
                <form action="" className="gap-2.5 py-6 space-y-3 w-full" onSubmit={onSubmit}>
                    <BaseInput 
                    label="Email" 
                    type="text" 
                    onChange={(e) => onChange("email", e.target.value)} 
                    value={form.email} 
                    placeholder="exp123@email.com" />

                    <BaseInput 
                    label="Password" 
                    type="password" 
                    onChange={(e) => onChange("password", e.target.value)} 
                    value={form.password} 
                    placeholder="Pass@123" />
                    <Redirect url={"/register"} name={"Register"} text={"New to Relevate"}/>
                    <BaseButton type="submit" text="Login" className="btn btn-primary py-2.5 px-2 w-full"/>
                </form>
            </div>
        </div>
    )
}