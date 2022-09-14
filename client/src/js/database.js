import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// Module 1936
export const putDb = async (content) => {
  console.error('putDb not implemented');
  console.log('Put worked');
  // Create a connection to the IndexedDB database and the version we want to use.
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and specify the store and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');
  // Open up the desired object store.
  const store = tx.objectStore('jate');
  // Use the .put() method to update content in the database.
  const request = store.put({ jate: content });
  // Get confirmation of the request.
  const result = await request;
  console.log('Result saved: ', result);
};

export const getDb = async () => {
  console.error('getDb not working');
  console.log('GET all from the database');
 // Create a connection to the IndexedDB database and the version we want to use.
  const jateDb = await openDB('jate', 1);
// Create a new transaction and specify the store and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');
// Open up the desired object store.
  const store = tx.objectStore('jate');
// Use the .get() method to read content in the database.
  const request = store.getAll();
  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
};

initdb();
