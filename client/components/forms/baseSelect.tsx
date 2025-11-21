export default function BaseSelect({option, label}: {option: string[], label: string}){
    return(
        <div>
            {
                label && (
                    <label htmlFor="" className="label font-bold text-lg">{label}</label>
                )
            }
            <select className="select w-full">
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