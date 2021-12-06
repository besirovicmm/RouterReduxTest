import React from 'react'

const Kartica = ({ key, data }) => {
  return (
    <div key={key}>
      <h4>{data.id}</h4>
      <h4>{data.title}</h4>
      <h4>{data.imgUrl}</h4>
    </div>
  )
}

export default Kartica
