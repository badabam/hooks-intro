import React, { useState } from 'react'
import Button from './Button'

export default function Counter() {
  const [counter, setCounter] = useState(0)
  const isZero = counter === 0

  return (
    <div>
      <h3>{counter}</h3>
      <Button text="Decrease" disabled={isZero} onClick={countDown} />
      <Button text="Increase" onClick={countUp} />
    </div>
  )

  function countUp() {
    setCounter(counter + 1)
  }

  function countDown() {
    setCounter(counter - 1)
  }
}
