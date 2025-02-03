/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortOn } from '../../redux/slisec/sortPrice'
import { Button } from 'antd'
import styles from './Sorted.module.scss'
import Tickets from '../Tickets/Tickets'

export default function Sorted() {
  const { sortBy } = useSelector((state) => state.sortPrice)
  const dispatch = useDispatch()
  const [elementActive, setElementActive] = React.useState(0)

  const btnsSorted = sortBy.map((sort, i) => {
    return (
      <div key={i} className={styles.button}>
        <Button
          block={true}

          type={elementActive === i ? 'primary' : 'default'}
          size={'middle'}
          // defaultValue={elementActive===i?true:false}
          onClick={() => {
            dispatch(sortOn(i))
            setElementActive(i)
          }}
        >
          {sort}
        </Button>
      </div>
    )
  })

  return (
    <div className={styles.div}>
      <div className={styles.div__div}>{btnsSorted}</div>
      <div className='tickets'></div>
    </div>
  )
}
