import { configureStore } from '@reduxjs/toolkit'
import entrySlice from '../slices/getApis'
import stanje from '../slices/getPlaceholder'

export default configureStore({
  reducer: { entries: entrySlice, placeholder: stanje },
})
