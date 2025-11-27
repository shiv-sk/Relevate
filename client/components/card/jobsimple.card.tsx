"use client";
import SimpleBaseCrad from "./simplejobcard";

export default function JobCardSimple({job, onApply}){
    return(
        <div className="w-full flex flex-col gap-6 items-center">
        {
            job.map((j)=>(
                <SimpleBaseCrad key={j.id}>
                    <div>
                        <h2 className="card-title">{j.title}</h2>
                        <div className="flex gap-2 space-x-2 justify-center items-center">
                            <p className="text-sm mt-2">{j.location}</p>
                            <p className="text-sm mt-2">{j.salary}</p>
                            <p className="text-sm mt-2">{j.type}</p>
                            <p className="text-sm mt-2">{j.level}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary btn-md mt-4" onClick={onApply}>
                                Apply
                            </button>
                        </div>
                    </div>
                </SimpleBaseCrad>
            ))
        }
        </div>
    )
}