import React from "react";

const UserInputBox = () => {
    return(

        <div className={"w-96 h-96 bg-white shadow-2xl m-auto flex flex-col"}>
            <div>
                <h1 className={"text-2xl font-bold text-center pt-8"}>플랙티컬 랭킹 시스템 접속</h1>
            </div>
            <div className={"mt-5"}>
                <div className={"px-5 py-2"}>
                    <label className={"block"}>학번</label>
                    <input type={"text"} id="student_id" placeholder={"학번을 입력해주세요"} className={"border-gray-300 border text-sm rounded-lg w-full pl-2 py-2"}/>
                </div>
                <div className={"px-5 py-2"}>
                    <label className={"block"}>이름</label>
                    <input type={"text"} id="user_name" placeholder={"이름을 입력해주세요"} className={"border-gray-300 border text-sm rounded-lg w-full pl-2 py-2"}/>
                </div>
            </div>
            <button className={"border w-max h-max mx-auto mt-4 text-center p-2 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white"}>접속하기</button>
        </div>
    )
}

export default UserInputBox;