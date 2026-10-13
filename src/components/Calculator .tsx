import { useState } from "react";

export function Calculator() {
  const [thingA, setThingA] = useState("");
  const [thingB, setThingB] = useState("");
  const [eredmeny, setEredmeny] = useState(0);

  const calculateAddition = () => {
    setEredmeny(parseInt(thingA) + parseInt(thingB));
  };

  const calculateSubtraction = () => {
    setEredmeny(parseInt(thingA) - parseInt(thingB));
  };

  const calculateMultiplication = () => {
    setEredmeny(parseInt(thingA) * parseInt(thingB));
  };

  const calculateDivision = () => {
    if (parseInt(thingB) === 0) {
      setEredmeny(0);
    } else {
      setEredmeny(parseInt(thingA) / parseInt(thingB));
    }
  };

  return (
    <>
      <div className="card shadow-sm p-4">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="A"
          value={thingA}
          onChange={(e) => setThingA(e.target.value)}
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="B"
          value={thingB}
          onChange={(e) => setThingB(e.target.value)}
        />

        <div className="row g-2 mb-3">
          <div className="col">
            <button
              className="btn btn-primary w-100"
              onClick={calculateAddition}
            >
              Összead
            </button>
          </div>

          <div className="col">
            <button
              className="btn btn-success w-100"
              onClick={calculateSubtraction}
            >
              Kivon
            </button>
          </div>

          <div className="col">
            <button
              className="btn btn-warning w-100"
              onClick={calculateMultiplication}
            >
              Szoroz
            </button>
          </div>

          <div className="col">
            <button
              className="btn btn-danger w-100"
              onClick={calculateDivision}
            >
              Oszt
            </button>
          </div>
        </div>

        <p className="alert alert-info mb-0">
          <b>Eredmény: {eredmeny}</b>
        </p>
      </div>
    </>
  );
}
