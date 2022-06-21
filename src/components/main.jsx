import React, { useState, useContext, useEffect } from "react";
import cityData from '../assets/info/city.json'
import { selectboxStyle } from '../assets/js/mixThing'
import Select from 'react-select'

const Main = () => {
    let noteWord = "！因應疫情影響，出發前請先確認各地旅遊限制。"


    function Search_area() {
        let option = [{ value: 'all', label: '全部縣市' }];
        cityData.map(function (data, index) {
            option.push({ value: data.cityNameEn, label: data.cityName })
        })
        function optionChange(e) {
            console.log(e.value, e.label);
        }

        let option2 = [{ value: "place", label: "旅遊景點" }, { value: "tourism", label: "觀光活動" }, { value: "food", label: "美食品嚐" }, { value: "live", label: "住宿推薦" }]

        return (
            <div className="search_content">
                <div className='search_input'>
                    <input placeholder="輸入關鍵字">
                    </input>
                </div>

                <div className='search_select'>
                    <Select className="city" styles={selectboxStyle} options={option} isSearchable={false} placeholder={'請選擇城市'} onChange={optionChange} />
                    <Select className="type" styles={selectboxStyle} options={option2} isSearchable={false} placeholder={'請選擇類別'} onChange={optionChange} />
                </div>



            </div>
        )
    }

    return (
        <div className="main">
            <div className="search">
                <div className="bg">
                </div>
                <Search_area />
            </div>
            <div className="note">
                {noteWord}
            </div>
            <div className="show_area">
                <div className="show_area_auto">
                    <div className="title">旅遊景點</div>
                </div>
            </div>
        </div>

    )
}
export default Main