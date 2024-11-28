import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal,setFilterval] = useState("");
  // filter関数でテキストボックス内の値を含んだ文字列をanimals配列から抽出する
  // map関数で
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={(e) => setFilterval(e.target.value)}/>
      <ul>
        {animals
          .filter(animal => animal.indexOf(filterVal) !== -1)
          .map((animal) => (
          <li>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
