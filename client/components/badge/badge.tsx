export default function Badge({className, text}){
    return(
        <span className={`badge ${className}`}>{text}</span>
    )
}