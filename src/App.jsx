import { useState } from 'react'
import './index.css'
import { Right } from './assets/right'
import { Left } from './assets/left'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <Left/>
      <Right/>
    </div>
  )
}

export default App
