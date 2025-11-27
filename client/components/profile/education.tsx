export default function Education(){
    const education = [
        {
            "institute":"Institute1",
            "degree":"degree1",
            "passoutYear":2015
        },
        {
            "institute":"Institute2",
            "degree":"degree2",
            "passoutYear":2014
        },
        {
            "institute":"Institute3",
            "degree":"degree3",
            "passoutYear":2014
        },
    ]
    return(
        <div className="bg-base-100 shadow-xl px-2 py-4 w-full rounded-xl">
            <h3 className="font-bold text-lg">Education</h3>
            <div className="space-y-3">
                {
                    education.map((educ, index)=>(
                        <div key={index}>
                            <p>Institute: {educ.institute}</p>
                            <p>Degree: {educ.degree} <span>({educ.passoutYear})</span></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}