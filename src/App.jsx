import React, { useState } from 'react'
import './all.scss'
import Main from './components/main'
import Header from './components/header'
import Footer from './components/footer'
import cityData from './assets/info/city.json'
import Select from 'react-select'
import { selectboxStyle } from './assets/js/mixThing'
function App() {
  const [nowSearch, setNowSearch] = useState('')
  function Search_area() {
    let option = [{ value: 'all', label: '全部縣市' }];
    cityData.map(function (data, index) {
      option.push({ value: data.cityNameEn, label: data.cityName })
    })
    function optionChange(e) {
      console.log(e.value,e.label);
    }

    return (
      <div className='search_select'>
        <Select styles={selectboxStyle} options={option} isSearchable={false} placeholder={'請選擇城市'} onChange={optionChange} />
        <Select styles={selectboxStyle} options={option} isSearchable={false} placeholder={'請選擇城市'} onChange={optionChange} />

      </div>
    )
  }


  return (
    <div className="App">
      <Header />
      <main>
        <div className="search">
          <div className="bg">
          </div>
          <div className="search_content">
            <h1>探索台灣之美</h1>
            <hr />
            <Search_area />
            <div>
              <input className="search_input" placeholder="輸入關鍵字">
              </input>
            </div>
            <button className="search_b tn">搜尋</button>
          </div>
        </div>
        <Main/>

      </main>
      <Footer />
    </div>
  )
}

export default App
