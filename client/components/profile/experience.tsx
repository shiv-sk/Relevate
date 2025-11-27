export default function Experience(){
    const experience = [
        {
            "company":"Institute8",
            "role":"degree1",
            "years":2,
            "noticePeriod":"30 - 60"
        },
        {
            "company":"Institute5",
            "role":"degree1",
            "years":2,
            "noticePeriod":"30 - 60"
        },
        {
            "company":"Institute4",
            "role":"degree3",
            "years":2,
            "noticePeriod":"30 - 60"
        },
        {
            "company":"Institute1",
            "role":"degree2",
            "years":2,
            "noticePeriod":"30 - 60"
        },
    ]
    return(
        <div className="bg-base-100 shadow-xl px-2 py-4 w-full rounded-xl">
            <h3 className="font-bold text-lg">Experience</h3>
            <div className="space-y-3">
                {
                    experience.map((exp, index)=>(
                        <div key={index}>
                            <p className="font-semibold text-lg">Company: {exp.company}</p>
                            <p>role: {exp.role}</p>
                            <p>role: {exp.years}</p>
                            <p>noticePeriod: {exp.noticePeriod}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}