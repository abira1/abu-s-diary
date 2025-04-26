import { onChildAdded, ref } from "firebase/database";
import { db } from "@/lib/firebase";
import { Message } from '@/types';

export function listenToMessages(
  chatRoomId: string,
  callback: (message: Message) => void
) {
  try {
    const messagesRef = ref(db, `messages/${chatRoomId}`);
    onChildAdded(messagesRef, (snapshot) => {
      const message = snapshot.val();
      callback(message);
    });
  } catch (error) {
    console.error("Error listening to messages:", error);
  }
}