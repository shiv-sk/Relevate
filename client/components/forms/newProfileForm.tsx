import BaseButton from "./baseButton";
import BaseInput from "./baseInput";

export default function NewProfileForm({skill, onChange, onSubmit, addSkill, form}){
    return(
        <div className="bg-base-100 flex justify-center items-center max-w-sm w-full p-6 rounded-lg shadow-lg mx-auto flex-col">
            <h1 className="text-center font-bold text-2xl underline">NewProfile</h1>
            <div>
                <form action="" className="gap-2.5 py-6 space-y-3 w-full">
                    <BaseInput 
                    label="Name" 
                    type="text" 
                    onChange={(e)=>onChange("name", e.target.value)} 
                    value={form.name} 
                    placeholder="John Doe" />
                            
                    <BaseInput 
                    label="Email" 
                    type="text" 
                    onChange={(e)=>onChange("email", e.target.value)} 
                    value={form.email} 
                    placeholder="exp123@email.com" />
        
                    <BaseInput 
                    label="CurrentLocation" 
                    type="text" 
                    onChange={(e)=>onChange("currentLocation", e.target.value)} 
                    value={form.currentLocation} 
                    placeholder="Dehli" />

                    <BaseInput 
                    label="Expectingjobrole" 
                    type="text" 
                    onChange={(e)=>onChange("lookingFor", e.target.value)} 
                    value={form.lookingFor} 
                    placeholder="Testing" />

                    <div className="space-y-1.5">
                        <BaseInput 
                        label="Skill" 
                        type="text" 
                        onChange={(e)=>onChange("skill", e.target.value)} 
                        value={skill} 
                        placeholder="Testing" />
                        <BaseButton 
                        type="button" 
                        text="Add" 
                        className="btn btn-secondary py-2.5 px-2"/>
                    </div>

                    <div className="space-y-1.5">
                        <h3 className="text-lg font-semibold">Education 
                            <span className="font-normal">(optional)</span>
                        </h3>
                        <BaseInput 
                        label="Institute" 
                        type="text" 
                        onChange={""} 
                        value={""} 
                        placeholder="Institute Name" />

                        <BaseInput 
                        label="Degree" 
                        type="text" 
                        onChange={""} 
                        value={""} 
                        placeholder="BE" />

                        <BaseInput 
                        label="PassoutYear" 
                        type="number" 
                        onChange={""} 
                        value={""}  />
                        <BaseButton type="button" text="Add" className="btn btn-secondary py-2.5 px-2"/>
                    </div>

                    <div className="space-y-1.5">
                        <h3 className="text-lg font-semibold">Experience 
                            <span className="font-normal">(optional)</span>
                        </h3>
                        <BaseInput 
                        label="Company" 
                        type="text" 
                        onChange={""} 
                        value={""} 
                        placeholder="Company Name" />

                        <BaseInput 
                        label="Role" 
                        type="text" 
                        onChange={""} 
                        value={""} 
                        placeholder="Tester" />

                        <BaseInput 
                        label="Year" 
                        type="number" 
                        onChange={""} 
                        value={""}  />
                        
                        <BaseInput 
                        label="Noticeperiod" 
                        type="text" 
                        onChange={""} 
                        value={""}
                        placeholder="30-45"  />
                        <BaseButton type="button" text="Add" className="btn btn-secondary py-2.5 px-2"/>
                    </div>

                    <div className="space-y-1.5">
                        <h3 className="text-lg font-semibold">Project 
                            <span className="font-normal">(optional)</span>
                        </h3>
                        <BaseInput 
                        label="Name" 
                        type="text" 
                        onChange={""} 
                        value={""} 
                        placeholder="Project Name" />

                        <BaseInput 
                        label="Description" 
                        type="text" 
                        onChange={""} 
                        value={""} 
                        placeholder="About Project" />
                        
                        <BaseInput 
                        label="Github" 
                        type="text" 
                        onChange={""} 
                        value={""}
                        placeholder="Project-Github-Link"  />

                        <BaseInput 
                        label="Live" 
                        type="text" 
                        onChange={""} 
                        value={""}
                        placeholder="Project-Live-Link"  />

                        <BaseInput 
                        label="Demo" 
                        type="text" 
                        onChange={""} 
                        value={""}
                        placeholder="Project-Demo-Link"  />

                        <BaseInput 
                        label="Article" 
                        type="text" 
                        onChange={""} 
                        value={""}
                        placeholder="Project-Article-Link"  />
                        <BaseButton type="button" text="Add" className="btn btn-secondary py-2.5 px-2"/>
                    </div>

                    <div className="space-y-1.5">
                        <h3 className="text-lg font-semibold">SocialMedia 
                            <span className="font-normal">(optional)</span>
                        </h3>
                        <BaseInput 
                        label="Name" 
                        type="text" 
                        onChange={""} 
                        value={""} 
                        placeholder="SocialMedia Name" />

                        <BaseInput 
                        label="Link" 
                        type="text" 
                        onChange={""} 
                        value={""} 
                        placeholder="SocialMedia-Link" />

                        <BaseButton type="button" text="Add" className="btn btn-secondary py-2.5 px-2"/>
                    </div>

                    <BaseButton type="submit" text="Create" className="btn btn-primary py-2.5 px-2 w-full"/>
                        </form>
                    </div>
                </div>
    )
}