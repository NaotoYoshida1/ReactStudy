const Example = () => {
  const num = {val: 2}
  // => numの値をdoubleの引数に渡してから計算結果をnumに対してdoubleという関数の結果に渡している
  // const double = (num) => {
  //   num.val = num.val * 2;
  //   return num;
  // }
  // => doubleという関数の結果numを受け取ってnewNumという変数に値を渡しているため
  //    doubleという関数でnum の値を変更していることになるため関数型プログラミングとしてNG

  // 正しい関数プログラミングの方法
  const double = (num) => {
    const newNum = { ...num };
    newNum.val = num.val * 2;
    return newNum;
  }
  
  const newNum = double(num);
  console.log(newNum === num);

  return (
    <>
      <h3>不変性（Immutability）</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
    </>
  );
};

export default Example;
