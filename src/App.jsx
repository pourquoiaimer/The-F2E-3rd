import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState('')
  function getData(){
    axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON')
    .then(function(response){
      setData(response.data)
      console.log(response.data);
    })
    .catch(function(error){
      console.log(error);
    })
    .then(function(){
      console.log('a');
    })
  }
  return (
    <div className="App">
      <h1>axios test</h1>
      <button onClick={getData}>抓資料</button>
    </div>
  )
}

export default App
