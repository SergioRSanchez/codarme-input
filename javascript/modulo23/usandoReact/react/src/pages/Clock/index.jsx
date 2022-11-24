import { useState } from 'react'

export function Clock() {
  const [currentTime, updateCurrentTime] = useState('')

  setInterval(() => {
    let now = new Date().toLocaleTimeString()
    updateCurrentTime(now)
  }, 1000)

  return (
    <>
      <div className='clock'>{ currentTime }</div>
    </>
  )
}