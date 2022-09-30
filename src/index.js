import React from 'react';
import ReactDOM from 'react-dom/client';
import RankingBox from "./component/RankingBox";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className={"w-screen h-screen flex justify-center bg-sky-200 rounded-lg"}>
        <RankingBox/>
    </div>
);

