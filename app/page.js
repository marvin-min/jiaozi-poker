'use client'
import { set, get, ref, push, onValue, onChildChanged, onChildAdded, onChildRemoved } from 'firebase/database';
import { useEffect, useState } from 'react';
import { database } from '@/lib/firebase';
import { nanoid } from 'nanoid'
import '@/app/index.scss';
import _ from 'lodash';
import PokerCard from '@/components/PokerCard';
import Poker from '@/components/Poker/Poker';
import RoomForm from '@/components/Room/RoomForm';
import { offline } from '@/lib/firebase';
export default function Home() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([])
  const usersRef = ref(database, 'users');

  useEffect(() => {
    
    onValue(usersRef, (snapshot) => {
      if (snapshot.exists()) {
        const userArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id, ...data,
        }))
        setUsers(userArray);
      }
    });
    onChildChanged(usersRef, (data) => {
      console.log(data.key, data.val());
      //setCommentValues(postElement, data.key, data.val().text, data.val().author);
    });

    onChildRemoved(usersRef, (data) => {
      setUsers(users.filter(user => user.id !== data.key))
    });
  }, [])



  const handleDelete = (id) => {
    const userRef = ref(database, `users/${id}`);
    set(userRef, null);
  }
  const handleAdd = () => {
    let id = nanoid()
    const userRef = ref(database, `users/${id}`);
    const newUser = push(usersRef);
    set(newUser, {
      username: username,
      email: email,
    })
    setUsername('');
    setEmail('');
  }

  return (
    <>
      <RoomForm/>
    </>
    )
}
