import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState('')
  const userRequest = axios.create({
    baseURL:'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON',
  })
  let url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON'
  const getDatas = (url)=>{
    console.log(url);
    userRequest.get(url).then(function(response){
      console.log(response.data);
    }).catch(function(){})
  }

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
    <div className="App">
      <h1>axios test</h1>
      <button onClick={()=>{getDatas(url)}}>抓資料</button>
    </div>
  )
}

export default App
