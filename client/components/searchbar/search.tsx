import BaseButton from "../forms/baseButton";
import BaseInput from "../forms/baseInput";

export default function SearchBar({onChange, value, label}){
    return(
        <div>
            {
                label && (
                    <label htmlFor="" className="label font-bold text-lg">{label}</label>
                )
            }
            <div className="flex justify-between items-center gap-2 px-4">
                <BaseInput 
                type="text" 
                onChange={(e)=>onChange(e.target.value)} 
                value={value}
                placeholder="Search by Jobs"
                className="w-full"/>
                <BaseButton 
                type={"button"} 
                text={"Search"}
                className="btn btn-primary"/>
            </div>
        </div>
    )
}