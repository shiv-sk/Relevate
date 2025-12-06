import { ReactNode } from "react";

export default function BaseApplicationCard({children, className}: { children: ReactNode , className?: string}){
    return(
        <div className={`card md:w-[680px] w-[350px] bg-base-200 card-xl shadow-xl ${className}`}>
            {children}
        </div>
    )
}