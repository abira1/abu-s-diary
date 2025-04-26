import { push, ref } from 'firebase/database';
import { db } from "@/lib/firebase";
import { cleanObject } from "./FirebaseService";
import { Message } from '@/types';

export async function sendMessage(
  chatRoomId: string,
  messageData: Omit<Message, 'timestamp'>
) {
 try {
    const messagesRef = ref(db, `messages/${chatRoomId}`);
    const cleanedMessage = cleanObject({
      ...messageData,
      timestamp: Date.now(),
    });
    console.log("Sending message:", cleanedMessage);
    console.log("Database ref:", messagesRef);
    console.log("ChatRoomId:", chatRoomId);
    await push(messagesRef, cleanedMessage);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}