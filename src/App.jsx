import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Form } from './Components/Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-black text-white   lg:flex'>
      <Form/>
    </div>
  )
}

export default App
