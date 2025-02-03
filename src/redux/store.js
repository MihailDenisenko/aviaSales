import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slisec/filter'
import countTransfer from './slisec/countTransfer'
import sortPrice from './slisec/sortPrice'
import ticketSlice from './slisec/tickets'
import loadSlice from './slisec/loader'

export const store = configureStore({
  reducer: {
    slicer: counterSlice,
    transfer: countTransfer,
    sortPrice,
    ticketSlice,
    loadSlice,
  },
})
