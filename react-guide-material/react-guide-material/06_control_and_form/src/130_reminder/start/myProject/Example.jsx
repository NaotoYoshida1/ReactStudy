import { useState } from "react";

const Example = () => {
  // const task = ["店予約する","卵買う","郵便出す"];
  const [tasks, setTasks] = useState(["店予約する","卵買う","郵便出す"]);
  const killTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };
  // テキストボックスから取得する追加用リスト
  const [task, setTask] = useState("");
  const addTask = () => {
    // [...prevTasks, task]を使うことでaddTaskが発火したときのtasksにtask(テキストボックスの値)を追加する
    setTasks((prevTasks) => [...prevTasks, task]);
    setTask("");
  };
  return (
    <>
      <h2>Reminder</h2>
      <div>
        {/* <button onClick={killTask}>完了</button> */}
        {tasks.map((singleTask, index) => {
          return (
              <div key={index}>
                <button onClick={() => killTask(index)}>完了</button>
                <span>{singleTask}</span>
              </div>
          )
        })}
      </div>
      <div>
        <input type="text" value={task} onChange={(e) => {
          setTask(e.target.value);
          console.log(task);
        }} />
        <button onClick={addTask}>追加</button>
      </div>
    </>
  );
};

export default Example;
