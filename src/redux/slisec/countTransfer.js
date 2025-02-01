import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countTransfer: ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
  checkCountTransfer: [true, false, false, false, false],
  countTran: 0
}

export const countTransfer = createSlice({
  name: 'countTransfer',
  initialState,
  reducers: {
    firstInit(state, action) {
      state.checkCountTransfer[action.payload] = !state.checkCountTransfer[action.payload]
    },
    checkedTransf(state, action) {
      state.checkCountTransfer = state.checkCountTransfer.map((st, i) => {
        if (action.payload === i) {
          return st !== true ? true : false
        }
        return false
      })
      state.countTran = action.payload
    },
  },
})
export const { firstInit, checkedTransf } = countTransfer.actions

export default countTransfer.reducer
