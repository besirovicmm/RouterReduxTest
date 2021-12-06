import React, { useState, useEffect, useMemo } from 'react'
import Pagination from './Pagination'
import axios from 'axios'

const Stranice = () => {
  let PageSize = 8

  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState([])

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return data.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=100')
      .then((response) => {
        setData(response.data)
      })
  }, [])

  return (
    <div>
      {currentTableData.map((data, index) => (
        <div>{data.title}</div>
      ))}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

export default Stranice
