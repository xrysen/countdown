import React from 'react';
import './App.css';
import "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

const Event = () => {
  const eventRef = useFirestore().collection('events');
  const eventQuery = eventRef.orderBy('date');
  const { status, data: events } = useFirestoreCollectionData(eventQuery);

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  return (
    <div>
      {events.map((event) => {
        return <p key = {event.id as string}>{event.title as string} {event.date as Date}</p>
      })}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Countdown</h1>
        <Event />
    </div>
  );
}

export default App;
