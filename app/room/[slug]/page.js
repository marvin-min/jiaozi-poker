import Poker from '@/components/Poker/Poker'
import React from 'react'

const page = ({ params }) => {
  const {slug} = params
  return (
    <>
      {slug}
      <Poker/>
    </>
  )
}

export default page