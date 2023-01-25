    import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

const ModalRanking = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [studentId, setId] = useState("");
    const [data, setData] = useState(undefined);
    const ref = useRef();

    useEffect(() =>{
        setIsOpen(!isOpen);
    },[props.isOpen])

    const onClick = () =>{
        axios.post(process.env.REACT_APP_API_URL+'/find-user',{
            studentId : studentId
        })
            .then((res) =>{
                console.log(res.data);
                if(res.data === '' || res.data === null){
                    setData(undefined);
                }else{
                    setData(res.data);
                }
            }).catch((e) =>{
            setData(undefined);
        })
    }

    const onChange = (e) =>{
        setId(e.target.value);
    }

    const checkPrize = () => {
        if(data.ranking <= 10){
            return(
                <div>
                    <br/>
                    <span className={"text-xl font-bold"}>상품을 받으실 수 있습니다.</span>
                </div>
            );
        }else{
            return(
                <div>
                    <br/>
                    <span className={"text-xl font-bold"}>상품을 받으실 수 없습니다.</span>
                </div>
            );
        }
    }

    return (
        <div>
                <div className={"flex justify-center fixed top-1/2 left-1/2 z-40 bottom-0"}
                     style={{transform: "translate(-50%, -50%)"}}>
                    <div className={"absolute w-96 h-96 bg-white shadow-2xl z-50 bolder flex flex-col"}>
                        <button onClick={() => {
                            props.setIsOpen(!isOpen);
                        }} className={"absolute font-bold right-3 top-3 text-3xl text-gray-500 drop-shadow-xl"}>X
                        </button>
                        <h1 className={"text-2xl text-center mt-3 font-bold"}>랭킹 검색 시스템</h1>
                        <div className={"px-5 py-2"}>
                            <label className={"block text-center"}>학번을 입력하면 등수가 나옵니다</label>
                            <input type={"text"} onChange={onChange} id="student_id" placeholder={"학번을 입력해주세요"}
                                   className={"border-gray-300 border text-sm rounded-lg w-full pl-2 py-2"}/>
                        </div>
                        <button
                            className={"my-2 mx-5 border py-1 px-2 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white"}
                            onClick={onClick}
                        >
                            랭킹 검색
                        </button>
                        <div>
                            {data !== undefined?
                                <div className={"text-center"}>
                                    <span className={"text-xl font-bold"}>{data.studentId}</span>
                                    <span>님의 기록은</span>
                                    <br/>
                                    <span className={"text-xl font-bold"}>{data.ranking}</span>
                                    <span>등</span>
                                    <br/>
                                    <span className={"text-xl font-bold"}>{data.clearTime}</span>
                                    <span>입니다.</span>
                                    {checkPrize()}
                                </div> : <div className={"text-center text-xl font-bold"}>기록이 존재하지 않습니다.</div>
                            }
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ModalRanking;
