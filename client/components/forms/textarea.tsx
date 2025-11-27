export default function Textarea({value, onChange, placeholder, className}){
    return(
        <div>
            <textarea 
            className={`textarea ${className}`}
            value={value}
            onChange={onChange} 
            placeholder={placeholder}></textarea>
        </div>
    )
}