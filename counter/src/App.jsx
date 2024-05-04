import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import React, { useEffect, useRef, useState } from "react";
import Even from "./components/Even";
// function CurrencyInput({ currency, value, handleCurrencyChange }) {
//   return (
//     <div>
//       <label>{currency}</label>
//       <input
//         type="number"
//         value={value}
//         onChange={(e) => handleCurrencyChange(currency, e.target.value)}
//       />
//     </div>
//   );
// }

// export default function App() {
//   const [state, setState] = useState({
//     krw: 0,
//     usd: 0,
//   });

//   const rate = 1300;
//   function handleCurrencyChange(currency, value) {
//     if (currency === "krw") {
//       setState({
//         krw: value,
//         usd: value / rate,
//       });
//     } else {
//       setState({
//         krw: value * rate,
//         usd: value,
//       });
//     }
//   }

//   return (
//     <div>
//       <h1>환율 변환기</h1>
//       <CurrencyInput
//         currency={"krw"}
//         value={state.krw}
//         handleCurrencyChange={handleCurrencyChange}
//       />
//       <CurrencyInput
//         currency={"usd"}
//         value={state.usd}
//         handleCurrencyChange={handleCurrencyChange}
//       />
//     </div>
//   );
// }

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  //1: 마운트: 탄생 제어
  useEffect(() => {
    console.log("mount");
  }, []);

  //2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  //3. 언마운트: 죽음

  // useEffect(() => {
  //   console.log(`count:${count} / input: ${input}`);
  // }, [count, input]);
  // //dependency array deps
  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
