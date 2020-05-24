import React, { FC, useEffect, useRef, useState } from "react";

import ComlinkClass from "./class.comlink";

const Worker = require("./test.worker.ts");

const App: FC = () => {
  const workerRef = useRef<Worker>(new Worker());
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const worker = workerRef.current;

    worker.onmessage = (e: any) => {
      setMsg(e.data);
    };

    worker.postMessage("call");

    return () => {
      worker.terminate();
    };
  }, []);

  useEffect(() => {
    const promise = async () => {
      const obj: ComlinkClass = (await new ComlinkClass()) as any;
      console.log({ obj });
      await obj.setSeed("what");
      const hash = await obj.getHash("a");
      console.log({ hash });
    };
    promise();
  }, []);

  return (
    <div>
      <p>{msg}</p>
      <button>button</button>
    </div>
  );
};

export default App;
