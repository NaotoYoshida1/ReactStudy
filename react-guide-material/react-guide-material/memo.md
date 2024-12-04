
Package.jsonが存在するファイルへ移動し、「npm install」を実行
	Package.jsonに記載されているパッケージ情報（依存関係：dependencies）をインストールする
	npm install jqueryとかにすると特定のパッケージをインストールできる
		→installをrmにしたら特定のパッケージを削除することもできる

⭐︎処理が１行でおわる場合
	■引数が複数の場合のアロー関数
	アロー関数は function キーワードを使わずに記載できる
		// 例: 2つの数を足すアロー関数
		const add = (a, b) => {
			return a + b; 
		}; 
		// 使用例 
		console.log(add(3, 5)); // 出力: 8
	ここで、add は関数名、a と b は引数、=> はアロー（矢印）記号で関数の始まりを示す

	■引数が１つの場合のアロー関数
	引数が1つだけのときは、() を省略できる
		const square = x => x * x; 
		console.log(square(4)); // 出力: 16
	この例では、x が引数で、x * x が返される結果
	{ return } を使わずに、式を直接書くことで戻り値として扱うことができる

	■引数が０個の場合
	引数がない場合は、() を空のまま書く
		const greet = () => "Hello, World!"; 
		console.log(greet()); // 出力: "Hello, World!"

	■引数が複数の場合
		const multiply = (a, b) => a * b; 
		console.log(multiply(3, 5)); // 出力: 15

■そもそも処理が複数行ある場合
関数内で複数の処理を行うときは、{ } で囲みます。このとき、return を使って明示的に値を返す
	const calculateArea = (width, height) => { 
		const area = width * height; 
		return area; 
		}; 
	console.log(calculateArea(4, 5)); // 出力: 20

■まとめ
パターン	書き方	説明
引数が1つ	const func = x => x * x;	()を省略できる
引数が0個	const func = () => "Hello";	引数がない場合は()が必要
引数が複数	const func = (a, b) => a + b;	引数をカンマ区切りで()内に並べる
複数行の処理を含む場合	const func = (a, b) => { const c = a + b; return c; };	{ }内で処理を記述し、returnを使う

⭐︎ESモジュールとは
JSファイルを１つのモジュールとして認識し、そのファイル内でexportされた関数やオブジェクトを外部に公開し
他のファイルからインポートを通して利用できる機能
Reactでモジュール（JSファイル）をインポートした場合、そのファイル全体が一度実行され、エクスポートされた関数やオブジェクトのみが他のファイルで利用可能になります。 import や export の宣言は、モジュール間の依存関係を管理し、必要な機能だけを他のファイルで使えるようにするために実行されます。


■Reactについて
JSのオブジェクトを変換するときに利用するライブラリ
	babel-standalone.js

⭐︎viteについて
■viteライブラリでのプロジェクト作成方法
	npm create vite@latest
		フレームワークはReactを選択する
		実行環境はJavaScriptを選択する
	→作成したviteのフォルダに移動後
		npm install

■viteプロジェクトでのnpmコマンドオプション？について
	run dev
		開発環境用のサーバーを起動できるコマンド
	build
		本番環境用のファイルを作成するコマンド
	lint
		コードの書き方をチェックしてくれるコマンド
	preview
		ビルドしたコードを画面で確認するためのコマンド

⭐︎⭐︎⭐︎⭐︎
■viteプロジェクトを動かす流れ
	「App.jsx」が色々動かしている処理を司っている
	「main.jsx」に画面表示に関する処理が記載されている
	■大まかな流れ
		画面からリクエスト
		→index.htmlエントリ、jsx呼び出し
		→main.jsxにて呼び出し
			renderに記載されているコンポーネントを実行しにいく(今回の想定ではApp.jsxを実行)
				main.jsx 内では、ReactDOM.createRoot または ReactDOM.render が使用され、ReactアプリをDOMにマウント
		→App.jsx
			表示する内容や処理について記載させている
				通常App.jsx には、アプリの主要なUI構造やページのルーティング、状態管理、コンポーネントの配置などを記載する
		→App.jsx内でのコンポーネントの実行・呼び出し
			App.jsx 内で他のコンポーネント（例えば、Header, Footer, MainContent など）を呼び出す場合
			Reactはそれらのコンポーネントを順に評価・実行し、画面に表示する要素を決定する

★★★
■npm install が失敗するときに確認すること
	OneDrive上にアプリケーションが保存されていないか確認する
	OneDrive上に保存されている場合、ローカルの保存場所を変更する

■fnを引数にするときはfn関数が引数に含まれないコンポーネントが存在するとエラーが発生する

■オブジェクトを引数として渡したいときに使うスピリット演算子
	{...オブジェクト名}

■Childrenプロパティについて

■JSXの正体
	ReactライブラリのcreateElementという関数でHTMLのオブジェクトを生成する

■JSのイベント一覧
	onChange
		⇒テキストボックスの内容が変化したときに発動
	onBlur
		⇒テキストボックスからカーソル（フォーカス）が外れたときに発動
	onFocus
		⇒テキストボックスにカーソル（フォーカス）が入ったときに発動
	onMouseEnter
		⇒そのエリアにマウスが入った場合に発動
	onMouseLeave
		⇒そのエリアからマウスが出た場合に発動

■useStateの使いかた
	★宣言方法
		const [変数名, 変数を更新するための関数名] = useState(初期値);
	★更新方法
		変数を更新するための関数名(更新処理);

■コンポーネントを分けて記述する際の記述方法
	★自分がミスしまくったところ
		引数の記述方法
		const CountUpdate = ({count, setCount}) => {
			const countUp = () => {
				setCount(count + 1)
			};
			const countDown = () => {
				setCount(count - 1) 
			};
			return (
				<>
				<button onClick={countUp}>+</button>
				<button onClick={countDown}>-</button>
				</>
			);
		};

■スタイルをJSの中に記載する方法
	styled componentsというライブラリを使用する
		インストールコマンド
			npm i styled-components
	
■動的なスタイルを適用する方法
	import styled from "styled-components";
	const styledButton = styled.button`
		color: white;
	background-color: ${(props) => (props.dark ? "black" : "green")};
	`;

	${}: テンプレートリテラル内でJavaScriptの式を実行します
	(props) => ...: props を受け取り、その値に基づいて結果を返す関数です
	ここでは、呼び出し元のコンポーネントのprops.dark の値を評価して、背景色を切り替える
		⇒trueになる場合
			<ThirdButton dark>ボタン3 dark</ThirdButton>

■chakra UI をインストールする方法
	公式ドキュメントからインストール方法は検索する
	npm installからも可能
	
■useRefとは
	再レンダリングをさせずに値を保持するための機能
	useRefのcurrentプロパティで管理することができる
	refの値を変更しても再レンダリングが発生しない
	refオブジェクトをJSXのref属性に渡すとそのDOMにアクセスできるようにする

■関数型のプログラム記述
	イミュータビリティの意識が必要

