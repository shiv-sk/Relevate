"use client";
export default function BaseInput(
    {label, type, onChange, value, placeholder, required=false, className}:
    {label?: string, type, onChange, value: string, placeholder?: string, required?: boolean, className?: string}){
    return(
        <div className="form-control w-full">
            {
                label && (
                    <label htmlFor="" className="label font-bold text-lg">{label}</label>
                )
            }
            <input 
            type={type} 
            placeholder={placeholder} 
            className={`input w-full ${className}`} 
            value={value} 
            onChange={onChange}
            required={required} />
        </div> 
    )
}