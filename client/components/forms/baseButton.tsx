export default function BaseButton({type, text, className}: {type, text: string, className: string}){
    return(
        <button className={`text-lg ${className}`} type={type}>{text}</button>
    )
}