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
      console.log(e.value, e.label);
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
      <Main />
      <Footer />
    </div>
  )
}

export default App
