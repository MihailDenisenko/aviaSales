import React from 'react'
import { setSearchID, setTicketsAll, setTicketsVision, setNumbersTicket, setErrorer } from '../../redux/slisec/filter'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import qs from 'qs'
import styles from './Tickets.module.scss'
import Ticket from '../Ticket/Ticket'
import { Button } from 'antd'
import { orderBy, sortBy } from 'lodash'
import logo from '../../assets/images/noBilet.png'

export default function Tickets() {
  const [firstRender, setFirstRender] = React.useState(true)
  const [firstStart, setFirstStart] = React.useState(true)
  // const { numbersTickets } = useSelector((state) => state.ticketSlice)
  const { checkCountTransfer, countTran } = useSelector((state) => state.transfer)
  const { searchID, url, urlTickets, ticketsAll, ticketsVision, numbersTickets, ticketsWork } = useSelector(
    (state) => state.slicer,
  )
  const { sortingOfPrice } = useSelector((state) => state.sortPrice)
  const [tickets, setTickets] = React.useState([])
  const dispatch = useDispatch()
  let ticketsa = []
  React.useEffect(() => {
    axios({
      method: 'get',
      url: url,
    })
      .then((resp) => {
        console.log(resp)
        dispatch(setSearchID(resp.data))
      })
      .catch((err) => dispatch(setErrorer()))
  }, [])

  React.useEffect(() => {
    if (!firstStart) {
      const str = qs.stringify(searchID)

      axios
        .get(urlTickets + str)
        .then((resp) => {
          dispatch(setTicketsAll(resp.data.tickets))
        })
        .catch((err) => dispatch(setErrorer()))

    }
    setFirstStart(false)
  }, [searchID])

  React.useEffect(() => {
    let ticketsb = []
    if (countTran === 0 && ticketsWork.length !== 0) {
      ticketsa = JSON.parse(JSON.stringify(ticketsWork))

      ticketsb = ticketsa.map((tic, i) => tic)
      dispatch(setTicketsVision(ticketsb))
    } else if (countTran === 1 && ticketsWork.length !== 0) {
      ticketsa = JSON.parse(JSON.stringify(ticketsWork))
      ticketsb = ticketsa.filter((tic, i) => {
        let stops = tic.segments[0].stops.length
        return stops === 0 ? tic : ''
      })
    } else if (countTran === 2 && ticketsWork.length !== 0) {
      ticketsa = JSON.parse(JSON.stringify(ticketsWork))
      ticketsb = ticketsa.filter((tic, i) => {
        let stops = tic.segments[0].stops.length
        return stops === 1 ? tic : ''
      })
    } else if (countTran === 3 && ticketsWork.length !== 0) {
      ticketsa = JSON.parse(JSON.stringify(ticketsWork))
      ticketsb = ticketsa.filter((tic, i) => {
        let stops = tic.segments[0].stops.length
        return stops === 2 ? tic : ''
      })
    } else if (countTran === 4 && ticketsWork.length !== 0) {
      ticketsa = JSON.parse(JSON.stringify(ticketsWork))
      ticketsb = ticketsa.filter((tic, i) => {
        let stops = tic.segments[0].stops.length
        return stops === 3 ? tic : ''
      })
    }
    dispatch(setTicketsVision(ticketsb))
  }, [countTran])

  React.useEffect(() => {
    if (firstRender) {
      ticketsa = orderBy(ticketsVision, ['price'], ['asc']).map((tick, i) => {
        const { price, carrier, segments } = tick
        setFirstRender(false)

        return (
          <li className={styles.li} key={i}>
            <Ticket price={price} carrier={carrier} segments={segments} />
          </li>
        )
      })
    } else {
      ticketsa = ticketsVision.map((tick, i) => {
        const { price, carrier, segments } = tick
        if (i < numbersTickets) {
          return (
            <li className={styles.li} key={i}>
              <Ticket price={price} carrier={carrier} segments={segments} />
            </li>
          )
        }
      })
    }
    setTickets(ticketsa)
  }, [ticketsVision, numbersTickets])

  React.useEffect(() => {
    if (sortingOfPrice === 0 && tickets.length !== 0) {
      console.log('sort aaa', ticketsVision)
      ticketsa = sortBy(ticketsVision, ['price'], ['asc'])
      dispatch(setTicketsVision(ticketsa))
    } else if (sortingOfPrice === 1 && tickets.length !== 0) {
      ticketsa = JSON.parse(JSON.stringify(ticketsVision))
      ticketsa.sort((a, b) => a.segments[0].duration - b.segments[0].duration)
      dispatch(setTicketsVision(ticketsa))
    } else if (sortingOfPrice === 2 && tickets.length !== 0) {
      ticketsa = JSON.parse(JSON.stringify(ticketsVision))
      ticketsa.sort((a, b) => {
        let x = a.segments[0].duration - b.segments[0].duration
        return x == 0 ? a.price - b.price : x
      })
      dispatch(setTicketsVision(ticketsa))
    }
  }, [sortingOfPrice])

  return (
    <div className={styles.div}>
      {!checkCountTransfer.includes(true) ? (
        <div className={styles.noBillet}>
          <h2 className={styles.noBillet__p}>Рейсов, подходящих под заданные фильтры, не найдено</h2>
          <img src={logo} alt='' className={styles.noBillet__img} />
        </div>
      ) : (
        <ul className={styles.ul}>{tickets}</ul>
      )}
      {checkCountTransfer !== 500 && checkCountTransfer.includes(true) && ticketsAll.length !== 0 ? (
        <div className={styles.divAnyBtn}>
          <Button className={styles.anyBtn} onClick={() => dispatch(setNumbersTicket(5))}>
            Добавить ещё 5 билетов
          </Button>
          <Button className={styles.anyBtn} onClick={() => dispatch(setNumbersTicket(10))}>
            Добавить ещё 10 билетов
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
