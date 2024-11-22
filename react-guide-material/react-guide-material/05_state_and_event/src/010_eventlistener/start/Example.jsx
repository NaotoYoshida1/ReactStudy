const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました');
  }
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onChange={()=>console.log(e.target.value)}>クリックしてね</button>
    </>
  );
};

export default Example;
