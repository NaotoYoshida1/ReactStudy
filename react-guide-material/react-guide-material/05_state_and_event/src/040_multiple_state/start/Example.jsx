import { userState, useState } from "react";

const Example = () => {
    const [countA, setCountA] = useState(0);
    return (
        <>
            <p>ボタンAを{countA}回押しました！</p>
            <button onClick={
                () => setCountA(countA + 1)
            }>countAボタン</button>
        </>
    )
};

export default Example;
