import React, { FunctionComponent, useState } from "react";

const App: FunctionComponent = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <p>{num}</p>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default App;
