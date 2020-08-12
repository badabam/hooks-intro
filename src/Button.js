import React from 'react'
import './Button.css'

export default function Button({ text, onClick, disabled }) {
  return (
    <button disabled={disabled} className="Button" onClick={onClick}>
      {text}
    </button>
  )
}
