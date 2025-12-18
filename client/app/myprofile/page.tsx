"use client";

import { Loadingstate } from "@/components/forms/loadingState";
import ProfileDisplay from "@/components/profile/profile";
import { useGetProfile } from "@/customhooks/profile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ViewProfile(){
    const {isLoading, profile} = useGetProfile();
    const router = useRouter();

    useEffect(()=>{
        if(!isLoading && profile === null){
            router.push("/newprofile");
        }
    }, [isLoading, profile, router]);

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