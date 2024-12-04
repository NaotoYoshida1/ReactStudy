import { useState } from "react";
import Toast from "./components/Toast";
import { createPortal } from "react-dom";

const Example = () => {
  const [toastOpen, setToastOpen] = useState(false);
  // ★★モーダルの表示に使用する子要素の定義
  const ToastPortal = ({children}) => {
    console.log("疎通確認");
    const target = document.querySelector('.container.start');
    return createPortal(children, target);
  }

  return (
    <div>
      <h3>
        トーストの作成（createPortal）
      </h3>
      <p>ボタンを押すと.container.start要素にマウントされて、表示されるトーストを作成してください。トーストにはToastコンポーネントを使用してください。</p>

      <div className="container start"></div>
      
      <button
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>
      {toastOpen && (
          <ToastPortal>
            <Toast
              visible={toastOpen}
              handleCloseClick={() => setToastOpen(false)}
            />
          </ToastPortal>
      )}
    </div>
  );
};

export default Example;
