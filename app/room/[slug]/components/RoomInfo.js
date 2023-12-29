import Poker from '@/components/Poker/Poker'
import React from 'react'

const RoomInfo = (room) => {
  return (
    <>
      <div className='room-name'>{room?.slug}</div>
      <Poker />
    </>
  )
}

export default RoomInfo