"use client";

export default function UserFooter(
    {
        salaryExcepted, 
        preferredLocation, 
        availability, 
        experience
    }:
    {
        salaryExcepted: string, 
        preferredLocation: string, 
        availability: string, 
        experience: string
    }){
    return(
        <div className="flex flex-wrap gap-2 py-4 px-2 bg-base-300 rounded-lg shadow-xl w-full justify-around items-center">
            <div className="flex flex-col">
                <p className="font-bold text-lg">Experience(in years): 
                    <span className="font-normal">&nbsp;{salaryExcepted ?? "salaryExcepted"}</span>
                </p>
            </div>
            <div className="">
                <p className="font-bold text-lg">Preferred Location: 
                    <span className="font-normal">&nbsp;{preferredLocation ?? "preferredLocation"}</span>
                </p>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-lg">Expected Salary(in LPA): 
                    <span className="font-normal">&nbsp;{availability ?? "availability"}</span>
                </p>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-lg">Availability: 
                    <span className="font-normal">&nbsp;{experience ?? "experience"}</span>
                </p>
            </div>
        </div>
    )
}