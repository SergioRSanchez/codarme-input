import { useState, useEffect } from 'react'

export function Clock() {
  const [currentTime, updateCurrentTime] = useState('')

  
  useEffect(() => {
    const interval = setInterval(() => {
      let now = new Date().toLocaleTimeString()
      updateCurrentTime(now)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <div className='clock'>{ currentTime }</div>
    </>
  )
}