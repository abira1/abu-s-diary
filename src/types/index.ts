export interface Message {
  text: string;
  sender: 'user' | 'admin';
  timestamp: number;
  imageUrl?: string;
}