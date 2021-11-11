import React, { useState, useContext, useEffect } from "react";
import heart_f from '../assets/images/icon/favorite_black_24dp.svg'
import heart_e from '../assets/images/icon/favorite_border_black_24dp.svg'

const Header = () => {
    return (
        <div className='header_content'>
            <p>Discover Taiwan</p>
            <div>
                <a href="/">a</a>
                <a href="/">a</a>
                <a href="/">a</a>
            </div>
            <div className='myFavorite'>
                <img src={heart_e} alt="" />
                <span>我的最愛</span>

            </div>
        </div>
    )
}

//左邊是logo，中間選擇要搜索的類別，右邊是我的最愛
//然後在縮小的時候，中右合成漢堡選單，
export default Header