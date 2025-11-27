export default function Skills(){
    const skills = ["skill1", "skill2", "skill3", "skill4", "skill5", "skill6"];
    return(
        <div className="bg-base-100 shadow-xl px-2 py-4 w-full rounded-xl">
            <div>
                <h3 className="font-bold text-xl mb-2">Skills</h3>
                <div className="flex flex-row flex-wrap gap-4">
                    {
                        skills.map((skill, index)=>(
                            <div key={index}>
                                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">{skill}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}