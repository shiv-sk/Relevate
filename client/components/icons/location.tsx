import { SlLocationPin } from "react-icons/sl";

export default function Location(){
    return(
        <div className="flex flex-wrap gap-1 justify-center items-center">
            <SlLocationPin className="text-lg font-semibold"/> 
            <span className="font-semibold">Location</span>
        </div>
    )
}