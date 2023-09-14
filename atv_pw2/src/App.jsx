import { useState } from 'react'
import Title from './components/title/index.jsx'
import Information from './components/information/index.jsx'
import SendMessage from './components/sendMessage/index.jsx'
import Message from './components/message/index.jsx'

import './App.css'

function App() {
  return (
    <>
    <div className='box'>
      <div>
        <Title />
        <Information />
        <SendMessage />
        <Message />
      </div>
      </div>
      
    </>
  )
}

export default App
