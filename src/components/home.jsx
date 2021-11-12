import React, { useState, useContext, useEffect } from "react";
import axios from 'axios'

const Home = () => {
    const [nowSearch, setNowSearch] = useState('')
    // function Content() {
    //     if (nowSearch === "") {
    //         return (

    //         )
    //     }
    // }
    return (
            <div className="search">
                <div className="bg">
                </div>
                <div className="search_content">
                    <h1>探索台灣之美</h1>
                    <hr />
                    <div>
                        <select className="search_area" name="area" >
                            <option value='null'>請選擇區域</option>
                            <option value='taipei'>台北</option>
                            <option value='new taipei'>新北</option>
                        </select>
                        <input className="search_input" placeholder="輸入關鍵字">
                        </input>
                        <button className="search_btn">搜尋</button>
                    </div>
                </div>
            </div>
    )
}
export default Home