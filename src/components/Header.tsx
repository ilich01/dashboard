import React from 'react'
type HeaderProps = {
  title: string
  category: string
}

const Header: React.FC<HeaderProps> = ({ title, category }) => {
  return (
    <div className="m-10">
      <p className="text-gray-200">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 ">{title}</p>
    </div>
  )
}

export default Header
