import Company from "@/components/company/company";

export default function CompanyPage(){
    return(
        <div className="min-h-screen bg-base-100 py-6">
            <div className="bg-base-200 rounded-lg py-4 w-full max-w-[620px] 
            mx-auto space-y-4 border-2 px-2">
                <Company/>
            </div>
        </div>
    )
}