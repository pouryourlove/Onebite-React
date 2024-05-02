import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import React, { useState } from "react";

function CurrencyInput({ currency, value, handleCurrencyChange }) {
  return (
    <div>
      <label>{currency}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => handleCurrencyChange(currency, e.target.value)}
      />
    </div>
  );
}

export default function App() {
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });

  const rate = 1300;
  function handleCurrencyChange(currency, value) {
    if (currency === "krw") {
      setState({
        krw: value,
        usd: value / rate,
      });
    } else {
      setState({
        krw: value * rate,
        usd: value,
      });
    }
  }

  return (
    <div>
      <h1>환율 변환기</h1>
      <CurrencyInput
        currency={"krw"}
        value={state.krw}
        handleCurrencyChange={handleCurrencyChange}
      />
      <CurrencyInput
        currency={"usd"}
        value={state.usd}
        handleCurrencyChange={handleCurrencyChange}
      />
    </div>
  );
}

// function App() {
//   const [count, setCount] = useState(0);

//   const onClickButton = (value) => {
//     setCount(count + value);
//   };
//   return (
//     <div className="App">
//       <h1>Simple Counter</h1>
//       <section>
//         <Viewer count={count} />
//       </section>
//       <section>
//         <Controller onClickButton={onClickButton} />
//       </section>
//     </div>
//   );
// }

// export default App;
