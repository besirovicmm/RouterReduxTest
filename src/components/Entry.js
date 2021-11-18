import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Entry = () => {
  const { id } = useParams()
  const location = useLocation()
  const entries = useSelector((state) => state.entries.entries[id])
  console.log(id)
  return (
    <div>
      <h1>{location.state && location.state.Description}</h1>
      <h1>{entries.Description}</h1>
    </div>
  )
}

export default Entry
