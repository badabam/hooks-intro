import React from 'react'
import Button from './Button'

export default function Counter({ counter, countUp, countDown }) {
  const isZero = counter === 0

  return (
    <div>
      <h3>{counter}</h3>
      <Button text="Decrease" disabled={isZero} onClick={countDown} />
      <Button text="Increase" onClick={countUp} />
    </div>
  )
}
