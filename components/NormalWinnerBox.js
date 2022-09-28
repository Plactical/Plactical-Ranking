import React, {useEffect} from "react";

const NormalWinnerBox = ({studentId, userName, clearTime, index}) =>{

    useEffect(() =>{
        console.log("studentId : "+ studentId);
        console.log("clearTime : "+ clearTime);
        console.log("index : "+ index);
    },[])

    return(
        <div className={"border-gray-300 border rounded-lg mx-3 px-2 mt-3"}>
            <span className={"font-bold text-3xl"}>{index + "등"}</span>
            <span className={"pl-4"}>{userName}</span>
            <span className={"pl-4"}>{clearTime}</span>
            <span className={"pl-4"}>{studentId}</span>
        </div>
    )
}

export default NormalWinnerBox;