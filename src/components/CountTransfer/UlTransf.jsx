/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import styles from './CountTransfer.module.scss'
import { Checkbox } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { firstInit, checkedTransf } from '../../redux/slisec/countTransfer'

export default function UlTransf({ count, i }) {
  const [stat, setStat] = React.useState(false)

  const { checkCountTransfer } = useSelector((state) => state.transfer)

  const dispatch = useDispatch()

  return (
    <div>
      <li
        className={styles.li}
        key={i}
        onClick={() => {
          setStat(!stat)
          dispatch(firstInit(i))
          dispatch(checkedTransf(i))
          dispatch(checkedTransf(i))
        }}
      >
        <span>
          <Checkbox
            checked={checkCountTransfer[i]}
            className={styles.checkbox}
            onChange={() => {
              setStat(!stat)
              dispatch(firstInit(i))
              dispatch(checkedTransf(i))
              dispatch(checkedTransf(i))
            }}
          ></Checkbox>
        </span>
        {count}
      </li>
    </div>
  )
}
