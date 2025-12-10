import React from "react"

export default function BaseSelect(
    {option, label, value, onChange, className}: 
    {
        option: string[], 
        label: string, 
        value: string, 
        onChange: (e: React.ChangeEvent<HTMLSelectElement>)=>void,
        className?: string
    }){
    return(
        <div>
            {
                label && (
                    <label htmlFor="" className="label font-bold text-lg">{label}</label>
                )
            }
            <select className={`select w-full ${className}`} value={value} onChange={onChange}>
                {
                    option.map((opt)=>(
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}