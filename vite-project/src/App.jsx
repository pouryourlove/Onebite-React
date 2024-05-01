// import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";
import OrderEditor from "./components/OrderEditor"

// function Welcome({ name, isMember }) {
//   return (
//     <>{isMember ? `${name}님 다시 오셨군요` : `${name}님 가입하시겠어요?`}</>
//   );
// }

export default function App() {
  return <OrderEditor/> ;
}

// function App() {
//   return (
//     <>
//       <Button text={"메일"} color={"빨간색"} />
//       <Button text={"카페"} />
//       <Button text={"블로그"}>
//         {" "}
//         <div>자식요소</div>{" "}
//       </Button>
//     </>
//   );
// }

// export default App;
