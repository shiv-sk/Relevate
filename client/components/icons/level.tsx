import { FaRegUser } from "react-icons/fa";

export default function Level(){
    return(
        <div className="flex flex-wrap gap-1 justify-center items-center">
            <FaRegUser className="text-lg font-semibold"/> 
            <span className="font-semibold">Level</span>
        </div>
    )
}