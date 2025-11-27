export default function H3({title, className}: {title: string, className?: string}){
    return(
        <h3 className={`text-2xl font-bold px-2 ${className}`}>{title}</h3>
    )
}