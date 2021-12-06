import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  vrednost: [],
  loading: false,
}
export const getStanje = createAsyncThunk('placeholder/getStanje', async () => {
  const result = await axios
    .get('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=100')
    .then((response) => console.log(response))
  return result
})

export const stanje = createSlice({
  name: 'placeholder',
  initialState,
  reducers: {},
  extraReducers: {
    [getStanje.pending]: (state) => {
      state.loading = true
    },
    [getStanje.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.entries = payload
    },
    [getStanje.rejected]: (state) => {
      state.loading = false
    },
  },
})
export default stanje.reducer
