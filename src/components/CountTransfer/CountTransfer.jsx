/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './CountTransfer.module.scss'
import { Avatar, Card, Checkbox } from 'antd'
import logo from '../../assets/images/sweeng.jpg'
import { useSelector, useDispatch } from 'react-redux'
import UlTransf from './UlTransf';
import { endLoader } from '../../redux/slisec/loader'



export default function CountTransfer() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isLoad, setIsLoad] = React.useState(true)
  const [stat, setStat] = React.useState(false)
  const {loader} = useSelector(state=>state.loadSlice)
  const { numbersTickets, ticketsVision } = useSelector((state) => state.slicer)
  const { countTransfer } = useSelector((state) => state.transfer)
  const dispatch = useDispatch()

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(endLoader())
    }, 1000)
  }, [])
  const cardElement = countTransfer.map((count, i) => {
    return <UlTransf key={i} count={count} i={i} />
  })


  console
  return (
    <div className={styles.sticky}>
      <Card
        cover={<img className={styles.logoAvatar} src={logo} alt='Example' />}
        hoverable={true}
        loading={loader}
        title='Количество пересадок'
        className={styles.card}
        bordered={false}
      >
        {cardElement}
      </Card>
      <h1 className={styles.sticky__p}>{` Показанно ${ticketsVision.length} из ${numbersTickets} билетов`}</h1>
    </div>
  )
}
