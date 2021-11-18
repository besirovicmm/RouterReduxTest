import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = { entries: [], loading: false }

export const getEntries = createAsyncThunk(
  'entries/getEntries',
  async (animals) => {
    if (!animals) {
      const result = await axios.get(`https://api.publicapis.org/entries`)

      return result.data.entries
    } else {
      const result = await axios.get(
        `https://api.publicapis.org/entries?category=${animals}`
      )

      return result.data.entries
    }
  }
)

export const entrySlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {},
  extraReducers: {
    [getEntries.pending]: (state) => {
      state.loading = true
    },
    [getEntries.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.entries = payload
    },
    [getEntries.rejected]: (state) => {
      state.loading = false
    },
  },
})

export default entrySlice.reducer
