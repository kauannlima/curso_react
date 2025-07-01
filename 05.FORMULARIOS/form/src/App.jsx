import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Forms</h2>
      <MyForm user={{ name: "Kauan", email: "kauan@gmail.com", bio: "Sou um programador", role: "admin" }} />
    </>
  )
}

export default App
