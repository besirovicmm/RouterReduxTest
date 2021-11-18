import React from 'react'
import { getEntries } from '../redux/slices/getApis'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Entries = () => {
  const [catState, setCatState] = React.useState('Weather')
  const entries = useSelector((state) => state.entries.entries)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const categories = [
    'Weather',
    'Video',
    'Vehicle',
    'URL Shorteners',
    'Transportation',
    'Tracking',
    'Text Analysis',
    'Test Data',
    'Sports & Fitness',
    'Social',
    'Shopping',
    'Security',
    'Science & Math',
    'Programming',
    'Photography',
    'Phone',
    'Personality',
    'Patent',
    'Open Source Projects',
    'Open Data',
    'News',
    'Music',
    'Machine Learning',
    'Jobs',
    'Health',
    'Government',
    'Geocoding',
    'Games & Comics',
    'Food & Drink',
    'Finance',
    'Events',
    'Environment',
    'Entertainment',
    'Email',
    'Documents & Productivity',
    'Dictionaries',
    'Development',
    'Data Validation',
    'Currency Exchange',
    'Cryptocurrency',
    'Continuous Integration',
    'Cloud Storage & File Sharing',
    'Calendar',
    'Business',
    'Books',
    'Blockchain',
    'Authentication',
    'Art & Design',
    'Anti-Malware',
    'Anime',
    'Animals',
  ]
  const handleChange = (e) => {
    setCatState(e.target.value)
  }
  React.useEffect(() => {
    console.log(catState)
    dispatch(getEntries(catState))
  }, [catState])

  return (
    <>
      <select defaultValue={catState} onChange={handleChange}>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      {entries &&
        entries.map((entry, index) => (
          <h1
            id={index}
            onClick={() => {
              //   navigate('/entry', { state: { ...entry } })
              navigate(`/entry/${index}`, { state: { ...entry } })
            }}
          >
            {entry.Description}
          </h1>
        ))}
    </>
  )
}

export default Entries
