type BaseButtonProps = {
    type: "button" | "submit" | "reset";
    text: string;
    className?: string;
    handleOnClick?: ()=>void;
}
export default function BaseButton(
    {type, text, className, handleOnClick}: BaseButtonProps){
    return(
        <button 
        className={`text-lg ${className}`} 
        type={type}
        onClick={handleOnClick}>{text}
        </button>
    )
}