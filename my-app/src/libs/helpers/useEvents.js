import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { loadEventsSuccess, loadEventsPending } from "../../actions/eventsAction";
import { store } from "../../index";

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  
  store.dispatch(loadEventsPending());
  useEffect(() => {
    const unsubscribe = db.collection("events")
    .onSnapshot(snapshot => {
      const newEvent = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setEvents(newEvent);
    });

    return () => unsubscribe();
  }, []);

  return store.dispatch(loadEventsSuccess(events));
};
