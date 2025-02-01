import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchID: null,
  url: 'https://aviasales-test-api.kata.academy/search',
  urlTickets: 'https://aviasales-test-api.kata.academy/tickets?',
  urlImage: 'http://pics.avs.io/90/90/BT.png.',
  ticketsAll: [],
  ticketsVision: [],
  numbersTickets: 5,
  ticketsWork: [],
  Errorer: false,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchID(state, action) {
      state.searchID = action.payload
    },
    setTicketsAll(state, action) {
      state.ticketsAll = action.payload
      state.ticketsWork = state.ticketsAll.filter((tick, i) => {
        if (i < state.numbersTickets) return tick
      })
      state.ticketsVision = state.ticketsAll.filter((tick, i) => {
        if (i < state.numbersTickets) return tick
      })
    },
    setTicketsVision(state, action) {
      state.ticketsVision = action.payload
    },
    setNumbersTicket(state, action) {
      state.numbersTickets += action.payload
      state.ticketsWork = state.ticketsAll.filter((tick, i) => {
        if (i < state.numbersTickets) return tick
      })
      state.ticketsVision = state.ticketsAll.filter((tick, i) => {
        if (i < state.numbersTickets) return tick
      })
    },
    setErrorer(state) { 
      state.Errorer = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSearchID, decrement, incrementByAmount, setTicketsAll, setTicketsVision, setNumbersTicket, setErrorer, } =
  filterSlice.actions

export default filterSlice.reducer
