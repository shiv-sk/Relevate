import BaseButton from "../forms/baseButton";
import ApplicationHeader from "./applicationheader";
import UserFooter from "./userfooter";
import UserInfo from "./userInfo";

export default function Application(){
    return(
        <div className="w-full px-2 py-4 space-y-5">
            <ApplicationHeader/>
            <UserInfo/>
            <UserFooter/>
            <div className="card-actions justify-end">
                <BaseButton type={"button"} text={"Connect"} className="btn btn-primary"/>
                <BaseButton type={"button"} text={"Reject"} className="btn btn-secondary"/>
                <BaseButton type={"button"} text={"Updatedprofile"} className="btn btn-neutral"/>
            </div>
        </div>
    )
}