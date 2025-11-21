"use client";
import SimpleBaseCrad from "./simplejobcard";

export default function JobCardSimple({job, onApply}){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
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
                        <button className="btn btn-primary btn-sm mt-4" onClick={onApply}>
                            Apply
                        </button>
                    </div>
                </SimpleBaseCrad>
            ))
        }
        </div>
    )
}