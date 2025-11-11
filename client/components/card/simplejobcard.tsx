"use client";
import { ReactNode } from "react";

export default function SimpleBaseCrad({ children }: { children: ReactNode }, classname=""){
    return(
        <div className={`card w-96 bg-base-200 card-md shadow-xl ${classname}`}>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}