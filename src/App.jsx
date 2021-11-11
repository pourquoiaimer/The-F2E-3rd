import React, { useState } from 'react'
import './all.scss'
import Home from './components/home'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  const [nowPage, setNowPage] = useState('home')


  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
