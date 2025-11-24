export default function Experience(){
    const experience = [
        {
            "company":"Institute1",
            "role":"degree1",
            "years":2,
            "noticePeriod":"30 - 60"
        },
        {
            "company":"Institute1",
            "role":"degree1",
            "years":2,
            "noticePeriod":"30 - 60"
        },
        {
            "company":"Institute1",
            "role":"degree1",
            "years":2,
            "noticePeriod":"30 - 60"
        },
        {
            "company":"Institute1",
            "role":"degree1",
            "years":2,
            "noticePeriod":"30 - 60"
        },
    ]
    return(
        <div className="bg-base-300 shadow-xl py-4 px-2">
            <h3 className="font-bold text-lg">Education</h3>
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