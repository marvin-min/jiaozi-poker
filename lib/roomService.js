import { ref, set, onValue } from "firebase/database";
import { database } from "./firebase";
import _ from 'lodash';
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
export default createRoom;