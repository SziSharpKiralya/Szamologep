import { LablecAdatok } from "../data/LablecAdatok";

export function Lablec() {
  return (
    <>
      {LablecAdatok.map((adat, index) => (
        <div key={index} className="lablecAdat">
          <span>{adat.cim}</span>
          <p>{adat.szoveg}</p>
        </div>
      ))}
    </>
  );
}
