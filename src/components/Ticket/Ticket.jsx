/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNumbersTicket } from '../../redux/slisec/tickets'
import styles from './Ticket.module.scss'
import { Button, Card } from 'antd'
import { format, formatDistance, minutesToHours, addMinutes } from 'date-fns'
import { pricer, timeInRoad, inRoadTime, Stops } from '../functions/Functions'

export default function Ticket({ price, carrier, segments }) {
  const { searchID, url, urlTickets, ticketsAll } = useSelector((state) => state.slicer)
  const [winWidth, setWinWidth] = React.useState(window.innerWidth)
  const [cardHeight, setCardHeight] = React.useState(false)
  const [btnNap, setBtnNap] = React.useState(true)
  const [forth, back] = segments
  const { numbersTickets } = useSelector((state) => state.ticketSlice)
  const { loader } = useSelector((state) => state.loadSlice)
  const { stopsAdv, stopsStr } = Stops(segments[0]['stops'])

  const { strTimeInRoad } = timeInRoad(forth.date, forth.duration)

  const { inRoadForth, inRoadBack } = inRoadTime(forth.duration, back.duration)
  const str = pricer(price)

  window.addEventListener('resize', () => setWinWidth(window.innerWidth))
  return (
    <div className={styles.div}>
      <Card
        loading={loader}
        hoverable={true}
        className={cardHeight ? `${styles.card} ${styles.cardMax}` : `${styles.card}`}
        bordered={false}
      >
        <h2 className={styles.h2}>{str}</h2>
        <img className={styles.img} src={`http://pics.avs.io/90/90/${carrier}.png`} />
        <div className={styles.div__cardTop}>
          <div className={styles.topDiv}>
            <div className={styles.countries}>
              <div className={styles.div__about}>{`${forth.origin}-${forth.destination}`}</div>
              <div className={styles.div__city}>{strTimeInRoad}</div>
            </div>
            <div className={styles.inRoad}>
              {<div className={styles.div__about}>В ПУТИ</div>}
              {<div className={styles.inRoad__div}>{inRoadForth}</div>}
            </div>
            <div className={styles.stops}>
              <div className={styles.div__about}>{stopsAdv}</div>
              <div className={styles.div}>{stopsStr}</div>
            </div>
          </div>

          <div className={styles.topDiv}>
            <div className={styles.countries}>
              <div className={styles.div__about}>{`${back.origin}-${back.destination}`}</div>
              <div className={styles.div__sitys}>{strTimeInRoad}</div>
            </div>
            <div className={styles.inRoad}>
              <div className={styles.div__about}>В ПУТИ</div>
              <div className={styles.div}>{inRoadForth}</div>
            </div>
            <div className={styles.stops}>
              <div className={styles.div__about}>{stopsAdv}</div>
              <div className={styles.div}>{stopsStr}</div>
            </div>
          </div>
        </div>
        {winWidth < 500 ? (
          <button
            onClick={() => {
              setBtnNap(!btnNap)
              setCardHeight(!cardHeight)
            }}
            className={styles.buttonMore}
          >
            {btnNap ? 'Показать ↓' : 'Скрыть ↑'}
          </button>
        ) : (
          ''
        )}
      </Card>
    </div>
  )
}

// ↑ ↓
