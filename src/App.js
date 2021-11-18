import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Entries from './components/Entries'
import Entry from './components/Entry'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entries" element={<Entries />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/entry/:id" element={<Entry />} />
      </Routes>
    </div>
  )
}

export default App
