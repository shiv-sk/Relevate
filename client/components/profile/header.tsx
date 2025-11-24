export default function Header(){
    return(
        <div className="py-4 space-y-4 bg-base-300">
            <div className="flex gap-2">
                <div className="avatar avatar-placeholder px-2 py-2">
                    <div className="bg-neutral text-neutral-content w-24 rounded-full">
                        <span className="text-3xl">D</span>
                    </div>
                </div>
                <div className="py-4 px-3 gap-2">
                    <p className="font-semibold text-lg">Name: 
                        &nbsp;<span className="font-normal">User1</span>
                    </p>
                    <p className="font-semibold text-lg">Email: 
                        &nbsp;<span className="font-normal">exp@email.com</span>
                    </p>
                    <p className="font-semibold text-lg">Location: 
                        &nbsp;<span className="font-normal">exp@email.com</span>
                    </p>
                    <p className="font-semibold text-lg">Looking for: 
                        &nbsp;<span className="font-normal">exp@email.com</span>
                    </p>
                </div>
            </div>
        </div>
    )
}