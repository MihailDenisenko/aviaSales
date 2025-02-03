/* eslint-disable no-unused-vars */
import { Flex, Col, Row } from 'antd'
import React from 'react'
import styles from './Menu.module.scss'
import CountTransfer from '../CountTransfer/CountTransfer'
import Sorted from '../Sorted/Sorted'
import Tickets from '../Tickets/Tickets'
import { useSelector } from 'react-redux'

const baseStyle = {
  width: '25%',
  height: 54,
}

export default function Menu() {
  return (
    <div className={styles.div}>
      <div className={styles.ColLeft}>
        <CountTransfer />
      </div>
      <div className={styles.ColRight}>
        <Sorted />
        <div className={styles.class}>
          <Tickets />
        </div>
      </div>
    </div>
  )
}
