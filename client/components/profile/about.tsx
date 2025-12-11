"use client";

export default function About({about}: {about?: string}){
    return(
        <div className="bg-base-100 shadow-xl px-2 py-4 w-full rounded-xl">
            <div>
                <h3 className="font-bold text-xl">About</h3>
                <p>{about}</p>
            </div>
        </div>
    )
}