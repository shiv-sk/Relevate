import Link from "next/link"
import BaseButton from "../forms/baseButton"

export default function Navbar(){
    return(
        <div>
            <div className="navbar bg-neutral shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl font-bold bg-base-100">Relevate</a>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar avatar-placeholder">
                        <div className="bg-base-300 text-base-content w-10 rounded-full">
                            <span className="text-3xl">D</span>
                        </div>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href={"/myprofile"} className="text-lg">Profile</Link>
                        </li>
                        <li>
                            <Link href={"/myapplications"} className="text-lg">MyApplications</Link>
                        </li>
                        <li>
                            <BaseButton type={"button"} text={"Logout"} className="bg-orange-500 cursor-pointer"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}