import React from "react";
import {useRouter} from "next/router";
import RankingBox from "../components/RankingBox";

const Ranking = () =>{
    const router = useRouter();
    const {studentId, userName} = router.query;
    return(
        <div className={"w-screen h-screen flex justify-center bg-sky-200 rounded-lg"}>
            <RankingBox/>
        </div>
    );
}

export default Ranking;