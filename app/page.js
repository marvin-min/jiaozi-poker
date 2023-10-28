'use client'
import { set, get, ref, push, onValue, onChildChanged, onChildAdded, onChildRemoved } from 'firebase/database';
import { useEffect, useState } from 'react';
import { database } from '@/lib/firebase';
import { nanoid } from 'nanoid'

export default function Home() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([])
  const usersRef = ref(database, 'users');

  useEffect(()=>{
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
      setUsers(users.filter(user=>user.id !== data.key))
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      More doc: https://firebase.google.com/docs/database/web/lists-of-data?hl=zh-cn#listen_for_child_events
      <div className='border'>
          <p>Username:<input name='username' type='text' value={username} onChange={e=>setUsername(e.target.value)} /></p>
          <p>Email: <input name='email' type='email' value={email} onChange={e => setEmail(e.target.value)} /></p>
        <button onClick={()=> handleAdd()}>Add</button>
      </div>
      <ul>
      {users.map((user, index) => {
        return <li key={index}>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <button onClick={()=>handleDelete(user.id)}>Delete</button>
          </li>
      })
        }
        </ul>
    </main>
  )
}
