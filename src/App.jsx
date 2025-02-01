/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/images/aviasalesLogo.png'
import './App.css'
import { Button, Row, Col } from 'antd'
import axios from 'axios'
import Tickets from './components/Tickets/Tickets'
import logo from './assets/images/Logo.png'
import styles from './App.module.scss'
import Menu from './components/Menu/Menu'
import { useSelector } from 'react-redux'
import logoErr from './assets/images/noFound.gif'
// import * as antd from "antd"

function App() {

  const { Errorer } = useSelector(state => state.slicer)
  
  console.log(Errorer)
  return (
    <>
      <div className='block'>
        <img className={styles.img__logo} src={logo} alt='' />
        {!Errorer ? (
          <Menu />
        ) : (
          <div>
            <h2 className={styles.h1}>Что-то пошло не так. попробуйте позже, a мы Уже пытаемся устранить эту проблемму </h2>
            <img src={logoErr} className={styles.imgError} />
          </div>
        )}
        {/* <Tickets /> */}
      </div>
    </>
  )
}

export default App
