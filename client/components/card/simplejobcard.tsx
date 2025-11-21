"use client";
import { ReactNode } from "react";

export default function SimpleBaseCrad({ children }: { children: ReactNode }, classname=""){
    return(
        <div className={`card md:w-96 w-80 bg-base-200 card-md shadow-xl ${classname}`}>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}