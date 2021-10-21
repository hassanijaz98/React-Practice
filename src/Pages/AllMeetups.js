import Meetuplist from "../Components/Meetups/Meetuplist";

import { useState, useEffect } from "react";

function AllMeetUpsPage() {
  const [isloading, setisloading] = useState(true);
  const [loadedmeetups, setloadedmeetups] = useState([]);

  useEffect(() => {
    setisloading(true);
    fetch(
      "https://react-getting-started-237d8-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup);
        }
        setisloading(false);
        setloadedmeetups(meetups);
      });
  }, []);

  if (isloading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>AllMeetups</h1>
      <Meetuplist meetups={loadedmeetups} />
    </div>
  );
}

export default AllMeetUpsPage;
