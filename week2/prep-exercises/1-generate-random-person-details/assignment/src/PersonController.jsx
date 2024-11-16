import { useEffect, useState } from "react";
import Person from "./Person";

function PersonController() {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      const user = data.results[0];
      setPerson({
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
      });
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      <button onClick={getPerson}>Get Random Person</button>
      <Person
        firstName={person?.firstName}
        lastName={person?.lastName}
        email={person?.email}
      />
    </div>
  );
}

export default PersonController;
