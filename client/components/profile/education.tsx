export default function Education(){
    const education = [
        {
            "institute":"Institute1",
            "degree":"degree1",
            "passoutYear":2014
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
        <div className="bg-base-300 shadow-xl py-4 px-2">
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