import Link from "next/link";
import BaseButton from "../forms/baseButton";

export default function Company(){
    return(
        <div className="bg-base-300 rounded-lg shadow-lg py-6 px-2">
            <h3 className="font-bold text-lg text-center">Company-Name</h3>
            <div className="">
                <h5 className="font-bold text-lg">About CompanyName</h5>
                <p>About Company</p>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="font-bold text-lg">SocialMedia</h5>
                <div className="flex flex-wrap gap-2">
                    <span>
                        <Link href={"/"}>socialMediaName</Link>
                    </span>
                    <span>
                        <Link href={"/"}>socialMediaName</Link>
                    </span>
                    <span>
                        <Link href={"/"}>socialMediaName</Link>
                    </span>
                </div>
            </div>
            <p className="font-bold text-lg">Email 
                <span className="font-normal">&nbsp;officialCompany@email.com</span>
            </p>
            <div className="flex flex-wrap justify-start items-center gap-2">
                <p>Domain</p>
                <p>Size</p>
                <p>Location</p>
            </div>
            <div className="card-actions justify-end">
                <BaseButton type={"button"} text={"Edit"} className="btn btn-primary"/>
            </div>
        </div>
    )
}