import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const Video = forwardRef(({ path }, ref) => {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    // 追加箇所
    play() {
      videoRef.current.play();
    },
    stop(){
      video.current.pause();
    }
  }));

  return (
    <video style={{ maxWidth: "100%" }}>
      <source src={path}></source>
    </video>
  );
});

const Example = () => {
  const [playing, setPlaying] = useState(false);

  const ref = useRef();

  return (
    <div>
      <h3>練習問題</h3>
      <p>useRef、useImperativeHandle、forwardRefを使って完成系の動画再生機能を作成してください。※useImperativeHandleでplay(再生)、stop(停止)メソッドを定義すること。
</p>
      <Video ref={ref} path="./sample.mp4" />
      <button
        onClick={() => {
          // 追加箇所
          if(playing){
            ref.current.stop();
          }else{
            ref.current.start();
          }
          setPlaying((prev) => !prev);
        }}
      >
        {/* ボタンの表記 */}
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Example;
