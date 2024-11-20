import Child from "./components/Child";

// const Example = () => <Child color="red" />;
const Example = () => {
    const hello = (arg) => {
        return `Hello ${arg}`;
    };
    return (
        <>
            {/* fnを引数にするときはfn関数が引数に含まれないコンポーネントが存在するとエラーが発生する
            <Child color="blue" />
            <Child color="red" />
            <Child num={123} /> */}
            <Child fn={hello} />
        </>
    )
};

export default Example;
