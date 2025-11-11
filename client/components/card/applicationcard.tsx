import SimpleBaseCrad from "./simplejobcard";

export default function ApplicationCard({applications}){
    return(
        <div className="space-y-4 gap-4 flex flex-col justify-center items-center">
            {
                applications.map((application)=>(
                    <SimpleBaseCrad key={application.id}>
                        <div>
                            <h2 className="card-title">{application.jobId.title}</h2>
                            <div className="flex gap-2 space-x-2 justify-center items-center">
                                <p className="text-sm mt-2 font-bold">AppliedAt: 
                                    <span className="font-normal">&nbsp;{application.createdAt}</span>
                                </p>
                                <p className="text-sm mt-2 font-bold">Status: 
                                    <span className="font-normal">&nbsp;{application.status}</span>
                                </p>
                            </div>
                        </div>
                    </SimpleBaseCrad>
                ))
            }
        </div>
    )
}