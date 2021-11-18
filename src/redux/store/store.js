import { configureStore } from '@reduxjs/toolkit'
import entrySlice from '../slices/getApis'

export default configureStore({
  reducer: { entries: entrySlice },
})
