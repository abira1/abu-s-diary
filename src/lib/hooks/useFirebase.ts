import { ref, set, get, onValue, off } from 'firebase/database';
import { database } from '../firebase';
import { useEffect, useState } from 'react';
export function useFirebaseData<T>(path: string, defaultValue: T) {
  const [data, setData] = useState<T>(defaultValue);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const dbRef = ref(database, path);
    // Set up real-time listener
    onValue(dbRef, snapshot => {
      const value = snapshot.val();
      setData(value || defaultValue);
      setLoading(false);
    });
    // Cleanup subscription
    return () => {
      off(dbRef);
    };
  }, [path, defaultValue]);
  const updateData = async (newData: T) => {
    const dbRef = ref(database, path);
    await set(dbRef, newData);
  };
  return {
    data,
    loading,
    updateData
  };
}
export async function setFirebaseData(path: string, data: any) {
  const dbRef = ref(database, path);
  await set(dbRef, data);
}
export async function getFirebaseData(path: string) {
  const dbRef = ref(database, path);
  const snapshot = await get(dbRef);
  return snapshot.val();
}