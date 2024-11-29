import AnimalItem from "./AnimalItem.jsx"
const AnimalList = ({animals}) => {
  if (animals.length === 0){
    return(
      // 検索した結果見つからないときに表示される文言
      <h3>アニマルが見つかりませんでした</h3>
    )
  }
    return (
        <ul>
          {animals
            .map((animal) => {
              return (
                <AnimalItem key={animal} animal={animal} />
              );
            })}
        </ul>
    );
};

export default AnimalList;