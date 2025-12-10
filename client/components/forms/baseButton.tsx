import { Loadingstate } from "./loadingState";

type BaseButtonProps = {
    type: "button" | "submit" | "reset";
    text: string;
    className?: string;
    handleOnClick?: ()=>void;
    isLoading?: boolean
}
export default function BaseButton(
    {type, text, className, handleOnClick, isLoading}: BaseButtonProps){
    return(
        <button 
        className={`text-lg ${className}`} 
        type={type}
        disabled={isLoading}
        onClick={handleOnClick}>{
            isLoading ? <Loadingstate className="loading-xs"/> : text
        }
        </button>
    )
}