import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

export default function Admin() {
  const navigate = useNavigate()

  const handleClick = () => {
    setTimeout(() => {
      navigate('/home')
    }, 2000)
  }

  return (
    <div>
      <aside>
        <Link to="/home">Home</Link>
        <button onClick={handleClick}>Dugme</button>
      </aside>
      <main></main>
    </div>
  )
}
