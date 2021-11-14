import React, { useState } from 'react'
import './all.scss'
import Main from './components/main'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  // const [nowPage, setNowPage] = useState('home')


  return (
    <div className="App">
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default App
