import { useState } from "react";

// const Example = () => {
//   const [count, setCount] = useState(0);
//   const countUp = () => {
//     setCount((prevstate) => prevstate + 1);
//   };
//   const countDown = () => {
//     setCount(count - 1);
//   };
//   return (
//     <>
//       <h3>カウント: {count}</h3>
//       <button onClick={countUp}>+</button>
//       <button onClick={countDown}>-</button>
//     </>
//   );
// };

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const toggleComponent = () => {
    setToggle(prev => !prev);
  }
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {/* <Count title="A"/> */}
      {/* <Count title="B"/> */}
      {/* 値を引き継いでコンポーネントを変更する場合の書き方 */}
      {/* {toggle ? <Count title="A" /> : <Count title="B" />} */}
      {/* 値をコンポーネントごとに管理する場合の書き方 */}
      {toggle ? <Count title="A" key="A" /> : <Count title="B" key="B" />}
    </>
  )
}

const Count = ({title}) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  }
  const countDown = () => {
    setCount(count - 1);
  }
  return(
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  )
}

export default Example;
