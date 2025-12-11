/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { baseUrl, getAndDeleteReq } from "@/apicalls/apiCalls";
import { Loadingstate } from "@/components/forms/loadingState";
import ProfileDisplay from "@/components/profile/profile";
import { ProfileInterface } from "@/interfaces/profileInterface";
import { useEffect, useState } from "react";

export default function ViewProfile(){
    const [profile, setProfile] = useState<ProfileInterface | null>(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const getProfile = async()=>{
            try {
                setIsLoading(true);
                const response = await getAndDeleteReq(`${baseUrl}/profile`, "GET");
                setProfile(response);
            } catch (error: any) {
                setError(error);
            }finally{
                setIsLoading(false);
            }
        }
        getProfile();
    }, []);
    return(
        <div>
            {
                isLoading ? (
                    <div>
                        <Loadingstate className="loading-xl"/>
                    </div>
                ) : profile ? (
                    <div>
                        <ProfileDisplay profile={profile}/>
                    </div>
                ) : (
                    <div>
                        <p>No profile</p>
                    </div>
                )
            }
        </div>
        
    )
}