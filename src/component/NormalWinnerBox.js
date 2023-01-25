import React, {useEffect} from "react";

const NormalWinnerBox = ({name, clearTime, score, index}) =>{

    const firstRanking = () =>{
        return (
            <>
                <tr className={"text-center text-4xl font-bold"}>
                    <td><span className={""}>{"🥇"+index + "등"}</span></td>
                    <td>{name}</td>
                    <td className={"text-3xl"}>{score}</td>
                    <td>{clearTime}</td>
                </tr>
            </>
        )
    }

    const secondRanking = () =>{
        return (
            <>
                <tr className={"text-center text-3xl font-bold"}>
                    <td><span className={""}>{"🥈"+index + "등"}</span></td>
                    <td>{name}</td>
                    <td className={"text-2xl"}>{score}</td>
                    <td>{clearTime}</td>
                </tr>
            </>
        )
    }

    const thirdRanking = () =>{
        return (
            <>
                <tr className={"text-center text-2xl font-bold"}>
                    <td><span className={""}>{"🥉"+index + "등"}</span></td>
                    <td>{name}</td>
                    <td className={"text-xl"}>{score}</td>
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
        else if(index <= 10)
        {
            return (
                <tr className={"text-center text-xl font-bold"}>
                    <td>{ "🏅"+index + "등"}</td>
                    <td>{name}</td>
                    <td className={"text-md"}>{score}</td>
                    <td>{clearTime}</td>
                </tr>
            )
        }
        else{
            return (
                <tr className={"text-center text-xl font-bold"}>
                    <td>{ index + "등"}</td>
                    <td>{name}</td>
                    <td className={"text-md"}>{score}</td>
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
    )
}

export default NormalWinnerBox;