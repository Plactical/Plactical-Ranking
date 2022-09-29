import React, {useEffect, useState} from "react";
import NormalWinnerBox from "./NormalWinnerBox";

const RankingBox = () =>{

    const [user, setUser] = useState([]);

    useEffect(() =>{
        const data = [
            {studentId : "2018202001", userName : "유깐잽", clearTime : "5분 43초"},
            {studentId : "2018202002", userName : "박깐잽", clearTime : "5분 44초"},
            {studentId : "2018202003", userName : "강깐잽", clearTime : "5분 45초"},
            {studentId : "2018202004", userName : "이깐잽", clearTime : "5분 46초"},
            {studentId : "2018202005", userName : "서깐잽", clearTime : "5분 47초"},
            {studentId : "2018202006", userName : "조깐잽", clearTime : "5분 48초"},
            {studentId : "2018202007", userName : "정깐잽", clearTime : "5분 49초"},
            {studentId : "2018202008", userName : "가깐잽", clearTime : "5분 50초"},
            {studentId : "2018202009", userName : "나깐잽", clearTime : "5분 51초"},
            {studentId : "2018202010", userName : "다깐잽", clearTime : "5분 52초"},
            {studentId : "2018202011", userName : "라깐잽", clearTime : "5분 53초"},
            {studentId : "2018202012", userName : "마깐잽", clearTime : "5분 54초"},
            {studentId : "2018202013", userName : "바깐잽", clearTime : "5분 55초"},
            {studentId : "2018202014", userName : "사깐잽", clearTime : "5분 56초"},
            {studentId : "2018202015", userName : "아깐잽", clearTime : "5분 57초"},
            {studentId : "2018202016", userName : "자깐잽", clearTime : "5분 58초"},
            {studentId : "2018202017", userName : "차깐잽", clearTime : "5분 59초"},
            {studentId : "2018202018", userName : "카깐잽", clearTime : "6분 00초"},
            {studentId : "2018202019", userName : "타깐잽", clearTime : "6분 01초"},
            {studentId : "2018202020", userName : "파깐잽", clearTime : "6분 02초"},
            {studentId : "2018202021", userName : "하깐잽", clearTime : "6분 03초"},
        ]
        setUser(data)
    }, [])

    return(
        <div className={"h-2/3 top-5 bottom-5 bg-white m-auto shadow-2xl flex flex-col overflow-y-scroll"} style={{width: "768px"}}>
            <span className={"text-center font-bold text-4xl my-5"}>랭킹</span>
            <table className={"table-auto mx-2 border-gray-300 drop-shadow-md shadow-md"}>
                <thead >
                    <tr className={"bg-blue-500 text-white font-normal text-xl"}>
                        <th>등수</th>
                        <th>학번</th>
                        <th>기록</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map( (data, index) => {
                        return (<NormalWinnerBox studentId={data.studentId} userName={data.userName} clearTime={data.clearTime} index={index + 1}/>);
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default RankingBox;