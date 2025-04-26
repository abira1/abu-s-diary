import { set, push, DatabaseReference } from "firebase/database";

export function cleanObject<T extends object>(obj: T): T {
    const cleaned: Partial<T> = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (obj[key] !== undefined) {
                cleaned[key] = obj[key];
            }
        }
    }
    return cleaned as T;
}

export async function safeSave<T extends object>(ref: DatabaseReference, data: T | T[]): Promise<void> {
    if (Array.isArray(data)) {
        const cleanedArray = data.map(item => cleanObject(item));
        await set(ref, cleanedArray);
    } else {
        const cleanedData = cleanObject(data);
        await set(ref, cleanedData);
    }
}

export async function safePush<T extends object>(listRef: DatabaseReference, data: T): Promise<void> {
  const cleanedData = cleanObject(data);
  const newItemRef = push(listRef);
  if(newItemRef.key){
      await set(newItemRef, cleanedData);
  }
  
}