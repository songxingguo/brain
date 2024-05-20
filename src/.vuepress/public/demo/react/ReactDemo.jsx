import React, { useState } from 'react'

function useCountDown() {
  
}

function App() {
  const [num, setNum] = useState(0)
  const increase = () => setNum(num + 1)
  return <button onClick={increase}>
    点击 {num}
  </button>
}

export default App