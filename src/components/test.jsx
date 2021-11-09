import React, { useState, useContext, useEffect } from "react";
import axios from 'axios'

const Texst = () => {
    const [data, setData] = useState('')
    const userRequest = axios.create({
        baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON',
    })
    let url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$format=JSON"
    const getDatas = (url) => {
        console.log(url);
        userRequest.get(url).then(function (response) {
            console.log(response.data);
        }).catch(function () { })
    }

    // function getJson() {
    //     axios.get
    // }

    function getData() {
        axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON')
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <div className="main_box">
            <h1 className='testla'>axios test</h1>
            <button onClick={() => { getDatas(url) }}>抓資料</button>
        </div>
    )
}
export default Texst