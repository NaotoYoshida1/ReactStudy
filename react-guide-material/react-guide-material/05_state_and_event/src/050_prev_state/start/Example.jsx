import { useState } from "react";

const Example = () => {
    const [count, setCount] = useState(0);
    const countUp = () => {
        console.log(count);
        setCount(count + 1);
        console.log(count);
    }
    const countDown = () => {
        console.log(count);
        setCount(count - 1);
        console.log(count);
    }
    return (
        <>
            <p>現在のカウント数：{count}</p>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </>
    );
};

export default Example;
