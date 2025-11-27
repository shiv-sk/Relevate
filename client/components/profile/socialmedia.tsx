import Link from "next/link"

export default function SocialMedia(){
    const socialMedia = [
        {
            "name":"socialMedia1",
            "link":"socialMedia1.com"
        },
        {
            "name":"socialMedia2",
            "link":"socialMedia2.com"
        },
        {
            "name":"socialMedia3",
            "link":"socialMedia3.com"
        },
    ]
    return(
        <div className="bg-base-100 shadow-xl px-2 py-4 w-full rounded-xl">
            <h3 className="font-bold text-lg">SocialMedia</h3>
            <div className="flex flex-wrap gap-2">
                {
                    socialMedia.map((media, index)=>(
                        <div key={index}>
                            <span className="font-semibold">
                                <Link href={media.link}>{media.name}</Link>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}