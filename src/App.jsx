import Header from "./component/Header";

import React from "react";

const App = () => {
  const name = "John";
  const x = 10;
  const y = 20;
  const names = ["brad", "mary", "joe", "sara"];
  const loggedIn = true;
  const styles = {
    color: "red",
    fontSize: "50px",
  };

  return (
    <div>
      <Header title="Header" />
      <p style={styles}>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
      {loggedIn && <h1>Hello member</h1>}
    </div>
  );
};

export default App;
