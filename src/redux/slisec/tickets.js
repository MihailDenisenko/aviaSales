import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numbersTickets: 5,
}

const ticketSlice = createSlice({
  name: 'TicketSlice',
  initialState,
  reducers: {
    setNumbersTicket(state, action) {
      state.numbersTickets += action.payload 
    },
  },
})

export const { setNumbersTicket } = ticketSlice.actions

export default ticketSlice.reducer
