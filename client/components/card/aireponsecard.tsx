"use client";
import BaseButton from "../forms/baseButton";
import { Loadingstate } from "../forms/loadingState";

export default function AiResponseCard({title, content, isBtnClicked, handleIsAIResponse}: 
    {title: string, content: string, isBtnClicked: boolean, handleIsAIResponse: () => void}){
    return(
        <div>
            <div className="card max-w-[550px] bg-base-100 card-md shadow-sm whitespace-pre-line">
                {
                    isBtnClicked ? (
                        <div className="flex justify-center items-center">
                            <Loadingstate className="loading-xl"/>
                        </div>
                    ) : content ? (
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{content}</p>
                            <div className="justify-end card-actions">
                            <BaseButton className="btn btn-neutral btn-sm" 
                            type={"submit"} 
                            text={"Close"} 
                            handleOnClick={handleIsAIResponse}/>
                            </div>
                        </div>
                    ) : "No Response"
                }
                
            </div>
        </div>
    )
}