/* eslint-disable no-dupe-else-if */
/* eslint-disable no-unused-vars */
import { format, minutesToHours, addMinutes } from 'date-fns'

export function pricer(price) {
  const strArr = String(price).split('')
  const arr = strArr.slice(0, -3)
  const arr2 = strArr.slice(-3)
  const str = `${arr} ${arr2} ₽`.replace(/,/g, '')
  return str
}

export function timeInRoad(date, timeInRoad) {
  let hour = Number(format(date, 'k')) - 3
  let arrival = format(addMinutes(date, timeInRoad), 'k:mm')
  hour === 0 ? (hour = '00') : ''
  const minute = Number(format(date, 'm'))
  let strTimeInRoad

  strTimeInRoad = `${hour}:${minute}-${arrival}`

  return { strTimeInRoad }
}

export function inRoadTime(forth, back) {
  const durationForth = forth
  const toHoursForth = minutesToHours(durationForth)
  const inRoadForth = `${toHoursForth}ч ${durationForth - toHoursForth * 60}мин`

  const durationBack = back
  const toHoursBack = minutesToHours(durationBack)
  const inRoadBack = `${toHoursBack}ч ${durationBack - toHoursBack * 60}мин`
  return { inRoadForth, inRoadBack }
}

export function Stops(stop) {
  let stopsAdv = ''
  let stopsStr = ''
  if (stop.length !== 0) {
    stop.map((s, i) => {
      i !== stop.length - 1 ? (stopsStr += `${s}, `) : (stopsStr += `${s}`)
    })
  }

  if (stop.length === 0) {
    stopsAdv = 'БЕЗ ПЕРЕСАДОК'
  } else if (stop.length === 1) {
    stopsAdv = '1 ПЕРЕСАДКА'
  } else {
    stopsAdv = `${stop.length} ПЕРЕСАДКИ`
  }
  return { stopsAdv, stopsStr }
}
