"use client";

export default function Header(
    {name, email, currentLocation, lookingFor}: 
    {
        name?: string, 
        email?: string
        currentLocation?: string 
        lookingFor?: string
    }){
    return(
        <div className="bg-base-100 shadow-xl px-2 py-4 w-full rounded-xl">
            <div className="flex gap-2">
                <div className="avatar avatar-placeholder px-2 py-2">
                    <div className="bg-neutral text-neutral-content w-36 rounded-full">
                        <span className="text-3xl">D</span>
                    </div>
                </div>
                <div className="py-4 px-3 gap-2">
                    <p className="font-semibold text-lg">Name: 
                        &nbsp;<span className="font-normal">{name ?? "Name"}</span>
                    </p>
                    <p className="font-semibold text-lg">Email: 
                        &nbsp;<span className="font-normal">{email ?? "Email"}</span>
                    </p>
                    <p className="font-semibold text-lg">Location: 
                        &nbsp;<span className="font-normal">{currentLocation ?? "Location"}</span>
                    </p>
                    <p className="font-semibold text-lg">Looking for: 
                        &nbsp;<span className="font-normal">{lookingFor ?? "Role"}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}