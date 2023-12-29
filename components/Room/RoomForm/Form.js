import { useState } from 'react'
import { createRoom } from '@/lib/roomService';
import './index.scss';


const Form = () => {
  const [roomName, setRoomName] = useState('');
  const handleRoomNameChange = (e) => {
    var re = /^(?!.*\/\/)[A-Za-z0-9][0-9A-Za-z\s\-]*$/ // or /^\w+$/ as mentioned
    if (re.test(e.target.value) || e.target.value === '') {
      setRoomName(e.target.value);
    }
  }

  const handleSubmit = () => {
    let data = createRoom(roomName);
    if (data.slug) {
      window.location.replace(`/room/${data.slug}`);
    }
    setRoomName('');
  }
  return (
    <div className='flex items-center justify-center flex-col gap-4'>
      <label htmlFor="roomName" className='text-purple-700 text-2xl font-extrabold max-w-md w-ful text-center'>Enter Room Name To Start</label>
      <input type="text" name='roomName'  placeholder='Room Name' value={roomName} onChange={handleRoomNameChange} className="mt-1 block max-w-md w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-100 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      <button className='bg-purple-900 text-white font-bold py-2 px-4 rounded hover:bg-purple-700' onClick={handleSubmit}>Submit -&gt;</button>
    </div>
  )
}

export default Form