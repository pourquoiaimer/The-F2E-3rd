import React, { useState, useContext, useEffect } from "react";
import { BsFillTelephoneFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { MdLocationOn,MdEmail}from 'react-icons/md'

const Header = () => {
    const [isShow, setIsShow] = useState(false)
    function MyFavoriteList() {
        if (isShow === false) {
            return null
        }
        return (
            <div className='modal_favorite' style={{ opacity: 1 }}>
                aqweqwe
            </div>
        )
    }
    return (
        <div className='header_content'>
            <span className='header_text'>Discover Taiwan</span>
            <div className='myFavorite' onClick={() => {
                setIsShow(!isShow)
            }}>
                <BsFillSuitHeartFill />
                <span>我的最愛</span>
            </div>
            <MyFavoriteList />

        </div>
    )
}

//左邊是logo，中間選擇要搜索的類別，右邊是我的最愛
//然後在縮小的時候，中右合成漢堡選單，
export default Header