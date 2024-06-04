import React from 'react'
type ButtonProps = {
  backgroundColor: string
  color: string
  size?: string
  text: string
  borderRadius: string
}
const Button: React.FC<ButtonProps> = ({ backgroundColor, color, size, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-dash-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button
