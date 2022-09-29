import React, {useEffect} from "react";
import Image from "next/image";

const NormalWinnerBox = ({studentId, userName, clearTime, index}) =>{

    useEffect(() =>{
        console.log("studentId : "+ studentId);
        console.log("clearTime : "+ clearTime);
        console.log("index : "+ index);
    },[])

    const firstRanking = () =>{
        return (
            <>
                <tr className={"text-center text-4xl font-bold"}>
                    <td>
                        <div className={""}>
                            <Image className={""} src={"/image/crown.png"} width={50} height={50}/>
                            <span className={""}>{index + "등"}</span>
                        </div>
                    </td>
                    <td>{studentId}</td>
                    <td>{clearTime}</td>
                </tr>
            </>
        )
    }

    const secondRanking = () =>{
        return (
            <>
                <tr className={"text-center text-3xl font-bold"}>
                    <td>
                        <div className={""}>
                            <Image className={""} src={"/image/crown.png"} width={40} height={40}/>
                            <span className={""}>{index + "등"}</span>
                        </div>
                    </td>
                    <td>{studentId}</td>
                    <td>{clearTime}</td>
                </tr>
            </>
        )
    }

    const thirdRanking = () =>{
        return (
            <>
                <tr className={"text-center text-2xl font-bold"}>
                    <td>
                        <div className={""}>
                            <Image className={""} src={"/image/crown.png"} width={30} height={30}/>
                            <span className={""}>{index + "등"}</span>
                        </div>
                    </td>
                    <td>{studentId}</td>
                    <td>{clearTime}</td>
                </tr>
            </>
        )
    }

    const Controller = () =>{
        if(index === 1)
        {
            return firstRanking();
        }
        else if(index === 2)
        {
            return secondRanking();
        }
        else if(index === 3)
        {
            return thirdRanking();
        }
        else
        {
            return (
                <tr className={"text-center text-xl font-bold"}>
                    <td>{index + "등"}</td>
                    <td>{studentId}</td>
                    <td>{clearTime}</td>
                </tr>
            )
        }
    }

    return(
        <>
            {
                Controller()
            }
        </>
        // <div className={"border-gray-300 border rounded-lg mx-3 px-2 mt-3"}>
        //     <span className={"font-bold text-3xl"}>{index + "등"}</span>
        //     <span className={"pl-4"}>{userName}</span>
        //     <span className={"pl-4"}>{clearTime}</span>
        //     <span className={"pl-4"}>{studentId}</span>
        // </div>
    )
}

export default NormalWinnerBox;