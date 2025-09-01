import { useState } from "react";

const Selected = () => {
  let people = [
    { id: 0, name: "ion" },
    { id: 1, name: "vasile" },
    { id: 2, name: "grigore" },
  ];

  let [clickedUser, setClickedUser] = useState(null);

  return (
    <div>
      <div>
        {people.map((person, key) => (
          <div
            key={key}
            style={clickedUser === person.id ? { backgroundColor: "red" } : {}}
            onClick={() => setClickedUser(key)}
          >
            {person.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selected;
