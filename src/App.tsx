import "./App.css";
import { ReactElement } from "react";

function formatInstrumentDescription(instrument: Instrument): string {
  return `this is a ${instrument.name} and its price is ${instrument.price}`;
}

function ConditionalRendering(
  instrument: Instrument | null
): ReactElement {
  if (instrument?.price) {
    return <h1> instrument price is {instrument?.price} </h1>;
  } else {
    return <h1>instrument price is undefined</h1>;
  }
}

type Instrument = {
  name: string ;
  price?: number;
};

function App(): ReactElement {
  const instrument: Instrument = { name: "piano", price: 10_000 };
  const emptyInstrument: Instrument = { name: 'guitar' };
  return (
    <div>
      <ConditionalRendering {...instrument}/>
      <ConditionalRendering {...emptyInstrument}/>
      <p>welcome to my store, {formatInstrumentDescription(instrument)}</p>
    </div>
  );
}

export default App;
