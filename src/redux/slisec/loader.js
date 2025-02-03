import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loader: true,
}

const loadSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    endLoader(state) {
      state.loader = false
    },
  },
})

export const { endLoader } = loadSlice.actions
export default loadSlice.reducer
