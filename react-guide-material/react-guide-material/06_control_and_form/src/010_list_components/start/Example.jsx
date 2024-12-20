
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {

  const animalList = [];
  // for(const animal of animals){
  //   animalList.push(<li>{animal}</li>);
  // }
  // map情報をhelloAnimalsという変数に代入した　配列で記述することが美しめ
  // const helloAnimals = animals.map((animal) => <li key={animal}>Hello, {animal}</li>);
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {/* {animalList} */}
        {/* {helloAnimals} */}
        {animals.map((animal) => <li key={animal} >Hello, {animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
