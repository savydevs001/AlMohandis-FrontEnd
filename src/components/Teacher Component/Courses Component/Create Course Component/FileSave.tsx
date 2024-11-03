import { openDB } from 'idb';

const dbPromise = openDB('file-store', 1, {
  upgrade(db) {
    db.createObjectStore('files');
  },
});

export const saveFileToIndexedDB = async (key: string, file: File) => {
  const db = await dbPromise;
  await db.put('files', file, key);
};

export const getFileFromIndexedDB = async (key: string): Promise<File | null> => {
  const db = await dbPromise;
  return await db.get('files', key);
};