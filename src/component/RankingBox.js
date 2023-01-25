import React, {useEffect, useState} from "react";
import NormalWinnerBox from "./NormalWinnerBox";
import ModalRanking from "./ModalRanking";
import axios from "axios";

const RankingBox = () =>{

    const [user, setUser] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() =>{
        axios.post('http://plactical.iptime.org:8081/api/all-data')
            .then((res) =>{
                console.log("실행함");
                setUser(res.data);
            }).catch((e) =>{
            console.log(e)
            console.log("실패")
        });
    }, [])

    useEffect(() =>{
        setInterval(() =>{
            axios.post('http://plactical.iptime.org:8081/api/all-data')
                .then((res) =>{
                    console.log("실행함");
                    setUser(res.data);
                }).catch((e) =>{
                console.log(e)
                console.log("실패")
            });
        },50000)
    })

    const onClick = () =>{
        setIsOpen(!isOpen);
    }

    const hrefKakao = () =>{
        alert("카카오 공지방 주소를 알려주세요... -유해찬-")
    }

    return(
        <div className={"h-2/3 top-5 bottom-5 bg-white m-auto shadow-2xl flex flex-col overflow-y-scroll"} style={{width: "768px"}}>
            <span className={"text-center font-bold text-4xl mt-5 mb-2"}>랭킹</span>
            {/*<div className={" flex justify-end"}>*/}
            {/*    <button onClick={onClick} className={"m-2 border py-1 px-2 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white"}>*/}
            {/*        내 랭킹*/}
            {/*    </button>*/}
            {/*    {isOpen ? <ModalRanking isOpen={isOpen} setIsOpen={setIsOpen} /> : null}*/}
            {/*    <button*/}
            {/*        onClick={hrefKakao}*/}
            {/*        className={"m-2 border  py-1 px-2 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white"}>*/}
            {/*        경품 공지방*/}
            {/*    </button>*/}
            {/*</div>*/}
            <table className={"table-auto mx-2 border-gray-300 drop-shadow-md shadow-md"}>
                <thead >
                    <tr className={"bg-blue-500 text-white font-normal text-xl"}>
                        <th>등수</th>
                        <th>이름</th>
                        <th>점수</th>
                        <th>기록</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map( (data, index) => {
                        return (<NormalWinnerBox name={data.name} score={data.score} clearTime={data.clearTime} index={index + 1}/>);
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default RankingBox;