import React, { useState, useContext, useEffect } from "react";
import axios from 'axios'
import cityData from '../assets/info/city.json'

const Main = () => {
    const [nowSearch, setNowSearch] = useState('')
    function Search_area() {
        let option=[];
        cityData.map(function (data, index) {
            option.push(<option value={data.cityNameEn} key= {index}>{data.cityName}</option>) 
        })
        console.log(option);
        return (
            <div>
                <select className="search_area" name="area" size='10' >
                    <option value='null'>請選擇縣市</option>
                    {option}
                </select>
            </div>
        )
    }

    return (
        <div className="search">
            <div className="bg">
            </div>
            <div className="search_content">
                <h1>探索台灣之美</h1>
                <hr />
                <Search_area/>
                <div>
                    <input className="search_input" placeholder="輸入關鍵字">
                    </input>
                </div>
                <button className="search_b tn">搜尋</button>

            </div>
        </div>
    )
}
export default Main