'use client'
import React, {useState} from 'react';
import { joinRoom } from '@/lib/roomService';
import './joinForm.scss';

const JoinForm = (room) => {
  const [userName, setUserName] = useState('')
  const handleJoin = () => {
    joinRoom('aaa', userName);
  }
  return (
    <div className='join-form text-indigo-950 '>
      <h1 className='text-4xl font-extrabold w-1/4' >Enter your name:</h1>
      <input type="text" value={userName}  onChange={(e) => setUserName(e.target.value)} className="w-1/4 text-center capitalize mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black " />
      <button className='hover:scale-105 bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700' onClick={handleJoin}>Join -&gt;</button>
    </div>
  )
}

export default JoinForm