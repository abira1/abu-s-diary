import { ref, get, onValue, off, getDatabase, Database } from 'firebase/database';
import { app } from '../firebase';
import { safeSave } from '../FirebaseService';
import { useEffect, useState } from 'react';

const database: Database = getDatabase(app);
export function useFirebaseData<T>(path: string, defaultValue: T) {
  const [data, setData] = useState<T>(defaultValue);
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    const dbRef = ref(database, path);
    // Set up real-time listener
    onValue(dbRef, snapshot => {
      const value = snapshot.val();
      console.log("Data updated for path:", path, "Value:", value);
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
    console.log('Updating data for path:', path, 'New data:', newData);
    await safeSave(dbRef, newData);
  };
  return {
    data,
    loading,
    updateData,
  };
}
export async function setFirebaseData(path: string, data: any) {
  const dbRef = ref(database, path);
  await safeSave(dbRef, data);
}
export async function getFirebaseData(path: string) {
  const dbRef = ref(database, path);
  const snapshot = await get(dbRef);
  return snapshot.val();
}