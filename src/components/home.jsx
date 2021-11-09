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
            <div className="bg">
            </div>
            <div className="title">
                <h1 >
                    冒險與發現
                </h1>
            </div>

        </div>
    )
}
export default Home