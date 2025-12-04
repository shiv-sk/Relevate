export default function UserFooter(){
    return(
        <div className="flex flex-wrap gap-2 py-4 px-2 bg-base-300 rounded-lg shadow-xl w-full justify-around items-center">
            <div className="flex flex-col">
                <p className="font-bold text-lg">Experience(in years): 
                    <span className="font-normal">0-1</span>
                </p>
            </div>
            <div className="">
                <p className="font-bold text-lg">Preferred Location: 
                    <span className="font-normal">Remote</span>
                </p>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-lg">Expected Salary(in LPA): 
                    <span className="font-normal">3-5</span>
                </p>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-lg">Availability: 
                    <span className="font-normal">Immediate</span>
                </p>
            </div>
        </div>
    )
}