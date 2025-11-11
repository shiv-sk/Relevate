import { ReactNode } from "react";

export default function JobDetailBaseCard({ children, classname }: { children: ReactNode, classname?:string }){
    return(
        <div className={`bg-base-100 shadow-lg rounded-lg space-y-6 px-3 py-6 ${classname} w-full`}>
            {children}
        </div>
    )
}