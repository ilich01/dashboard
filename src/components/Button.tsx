import React, { MouseEventHandler } from 'react'
type ButtonProps = {
  backgroundColor?: string
  color: string
  size?: string
  text?: string
  borderRadius: string
  icon?: any
  width?: string
  bgHoverColor?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}
const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  color,
  size,
  text,
  borderRadius,
  icon,
  width,
  bgHoverColor,
  onClick,
}) => {
  return (
    <button
      type="button"
      style={{ backgroundColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  )
}

export default Button
