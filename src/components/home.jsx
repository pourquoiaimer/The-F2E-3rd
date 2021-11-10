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
        <div className="main_box">
            <div className="homepage">
                <div className="bg_mask">
                </div>
                <div className="bg">
                </div>
                <div className="homepage_content">
                    <h1>冒險與發現</h1>
                    <hr />
                    <h2>Discover</h2>
                    <div>
                        <select className="search_area" name="area" >
                            <option value='null'>請選擇區域</option>
                            <option value='taipei'>台北</option>
                            <option value='new taipei'>新北</option>
                        </select>
                        <input className="search_input" value='' placeholder="輸入關鍵字">
                        </input>
                        <button className="search_btn">搜尋</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Home