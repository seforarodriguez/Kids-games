import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OpenAI from 'openai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src="https://media.istockphoto.com/id/998518584/photo/preschooler.jpg?s=612x612&w=0&k=20&c=OAZtiTrlJyT9pZO6Eb8fAeD6s41pmL1PwTgR7BK7a2s=" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Lets Find some fun games!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
