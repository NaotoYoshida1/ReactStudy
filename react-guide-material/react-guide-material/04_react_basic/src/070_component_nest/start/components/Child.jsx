import "./Child.css";
import { List } from "./List.jsx";

// ul>li{item-$}*5 で下記作成できる
const Example = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
    </div>
  );
};

export default Example;
