import { ref, set, onValue,get, child,update, onDisconnect } from "firebase/database";
import { database } from "./firebase";
import _ from 'lodash';
import { nanoid } from "nanoid";
const createRoom = (roomName) => {
  const validRoomName = _.replace(_.trim(roomName.toLowerCase()), /\s/g, '-');
  const roomRef = ref(database, `rooms/${validRoomName}`);
  let roomInfo = {}
  set(roomRef, {
    roomName,
    slug: validRoomName
  });
  onValue(roomRef, (snapshot) => {
    const data = snapshot.val();
    roomInfo = data;
  });
  
  return roomInfo;
}
const getRoom = async (roomName) => {
  const snapshot = await get(child(ref(database), `rooms/${roomName.toLowerCase()}`));
  if (snapshot.exists()) {
    console.log("Room Exists");
    console.log(snapshot.val());
    return snapshot.val();
  }
  return {};
}

const joinRoom = (roomName, userName) => {
  const id = nanoid();
  const updates = {};
  updates[`rooms/${roomName}/u/${id}/name`] = userName;
  updates[`rooms/${roomName}/u/${id}/vote`] = null;
  const connectedRef = ref(database, ".info/connected");
  onValue(connectedRef, (snap) => {
    if (snap.val() === true) {
      console.log("connected");
    } else {
      console.log("not connected");
    }
  });
  onDisconnect(ref(database, `rooms/${roomName}`)).remove();;
  return update(ref(database), updates);
}
export { getRoom, createRoom, joinRoom };