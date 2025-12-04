export default function ApplicationHeader(){
    return(
        <div className="flex flex-col py-4 px-2 bg-base-300 rounded-lg shadow-xl w-full">
            <p className="font-bold text-lg">Name: 
                <span className="font-normal">&nbsp;CandidateName</span>
            </p>
            <p className="font-bold text-lg">Email: 
                <span className="font-normal text-base">&nbsp;CandidateEmail</span>
            </p>
            <p className="font-bold text-lg">Role: 
                <span className="font-normal text-base">&nbsp;LookingFor</span>
            </p>
        </div>
    )
}