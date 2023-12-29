
import { getRoom } from '@/lib/roomService'
import { notFound } from 'next/navigation'
import { getCookie } from 'cookies-next';
import RoomInfo from './components/RoomInfo';
import JoinForm from './components/JoinForm';
import './index.scss'

const page =   async ({ params }) => {
  const { slug } = params
  const room = await getRoom(slug);
  const user = getCookie('unm')
  
  if (!room?.slug) {
    return notFound()
  }
  return (
    <>
      {user ? <RoomInfo room={room} /> : <JoinForm />}
    </>
  )
}

export default page