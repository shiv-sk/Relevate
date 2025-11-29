import { CiMoneyBill } from "react-icons/ci";

export default function Salary(){
    return(
        <div className="flex flex-wrap gap-1 justify-center items-center">
            <CiMoneyBill className="text-lg font-semibold"/> 
            <span className="font-semibold">Salary</span>
        </div>
    )
}