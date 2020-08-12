import React, { useState } from 'react'
import Counter from './Counter'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <Counter counter={counter} countUp={countUp} countDown={countDown} />
      <div
        style={{
          width: counter * 10,
          height: counter * 10,
          background: 'hotpink',
        }}
      ></div>
    </>
  )

  function countUp() {
    setCounter(counter + 1)
  }

  function countDown() {
    setCounter(counter - 1)
  }
}

export default App
