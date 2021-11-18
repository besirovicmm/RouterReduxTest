import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getEntries } from '../redux/slices/getApis'
import { useState } from 'react'

const Home = () => {
  const entries = useSelector((state) => state.entries.entries)

  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(getEntries())
  }

  return (
    <>
      <main>
        <Link to="/">Home</Link>
        <Link to="/entries">Entries</Link>
        <Link to="/entry">Entry</Link>
        <button onClick={clickHandler}>Dugme</button>
        {entries && entries.map((entry) => <h1>{entry.Description}</h1>)}
      </main>
    </>
  )
}

export default Home
