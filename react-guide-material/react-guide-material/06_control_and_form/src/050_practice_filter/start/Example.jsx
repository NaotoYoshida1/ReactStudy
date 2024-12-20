import { useState } from "react";
import Profile from "./components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [filterVal,setFilterVal] = useState("");
  // person.name の中で filterVal が最初の文字列として現れる場合 (indexOf が 0 を返す)、falsy と評価され 除外されてしまうため
  // includes を利用したほうが簡潔に記述できる
  return (
    <>
      <h3>練習問題</h3>
      <p>入力欄を設置して、入力値と名前が一致したもののみ表示する仕組みを作成してください。</p>
      <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)} />
      <ul>
        {persons
          // .filter(person => person.name.includes(filterVal))
          .filter(person => person.name.indexOf(filterVal) !== -1)
          .map((person) => (
            <li key={person.name}>
              <Profile {...person} />
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default Example;
