export default function BaseCheckbox({label, value, handleOnChange}: {label: string, value, handleOnChange}){
    return(
        <div>
            <label className="label">
                <input 
                type="checkbox" 
                className="checkbox"
                value={value}
                onChange={handleOnChange} />
                {label}
            </label>
        </div>
    )
}