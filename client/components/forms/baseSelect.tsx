export default function BaseSelect(
    {option, label, value, onChange}: 
    {option: string[], label: string, value: string, onChange: (value: string)=>void}){
    return(
        <div>
            {
                label && (
                    <label htmlFor="" className="label font-bold text-lg">{label}</label>
                )
            }
            <select className="select w-full" value={value} onChange={(e)=>onChange(e.target.value)}>
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