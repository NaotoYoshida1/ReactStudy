import { useState } from "react";
import AnimalList from "./components/AnimalList";
import AnimalFilter from "./components/AnimalFilter"

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  const filteredAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });

  // AnimalFilter => 入力欄の出力用コンポーネント
  // AnimalList => List表示の形式の役割
  return (
    <>
    <AnimalFilter filterState={[filterVal, setFilterVal]} />
    <AnimalList animals={filteredAnimals} />
    </>
  );
};

export default Example;
