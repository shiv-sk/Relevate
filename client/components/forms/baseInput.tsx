"use client";
export default function BaseInput(
    {label, type, onChange, value, placeholder, required=false}:
    {label: string, type, onChange, value: string, placeholder?: string, required?: boolean}){
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
            className="input w-full" 
            value={value} 
            onChange={onChange}
            required={required} />
        </div> 
    )
}