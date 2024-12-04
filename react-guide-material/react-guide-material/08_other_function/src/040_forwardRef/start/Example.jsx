import { useRef, forwardRef, useImperativeHandle } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    myFocus(){
      inputRef.current.focus();
    }
  }))
  return <input type="text" ref={ref} />
})
// const Input = ({customRef}) => {
//   return <input type="text" ref={customRef} />
// }

const Example = () => {
  const ref = useRef();
  return (
    <>
      {/* <input type="text" ref={ref} /> */}
      {/* <Input customRef={ref} /> */}
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        {/* インプット要素をフォーカスする */}
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
