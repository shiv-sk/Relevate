"use client";

import Link from "next/link";
import BaseButton from "../forms/baseButton";
import { MdDomain } from "react-icons/md";
import { MdPeopleOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Company(){
    return(
        <div className="bg-base-100 rounded-xl shadow-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Company Name</h3>
                <BaseButton text="Edit" className="btn btn-primary btn-sm" type={"button"} />
            </div>
            <div className="">
                <h5 className="font-semibold">About</h5>
                <p className="text-sm text-gray-600">Company description...</p>
            </div>
            <div className="">
                <h5 className="font-semibold">Email</h5>
                <p className="text-sm text-gray-600">officialCompany@email.com</p>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="font-bold text-lg">SocialMedia</h5>
                <div className="flex gap-3">
                    <Link href="/">LinkedIn</Link>
                    <Link href="/">Website</Link>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
                <span><MdDomain /> Health</span>
                <span><MdPeopleOutline /> 10 - 20</span>
                <span><IoLocationSharp /> Location</span>
            </div>
        </div>
    )
}