import {useEffect, useState} from "react";
//外部套件
import axios from "axios";

//相關檔案
import logo from './assests/logo.svg';
import './assests/App.css';
import Input from './components/Input';
import './assests/all.scss';

function App() {
  const [text,setText]=useState('');
  const onChangeHandler=(e)=>{
    setText(e.target.value);
  }
  useEffect(()=>{
    (async()=>{
        // console.log(process.env.REACT_APP_PATH);//看一下環境變數是否有正常取得
        const path=process.env.REACT_APP_PATH;
        const result=await axios.get(path);
        // const result=await axios.get('https://randomuser.me/api/');
        //前方定義一個變數 再搭配await取得promise結果
        console.log(result);
    })();
    //():立即執行
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus ipsam mollitia, iusto eaque temporibus laboriosam fugit at ipsum minima esse molestias. Delectus ullam deserunt molestiae quaerat minus nostrum voluptates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
        </a>
        <button type="button" className="btn btn-primary">Primary</button>
        {text}
        <Input id="sampleText" text="這是一個input" value={text} onChangeHandler={onChangeHandler}></Input>
      </header>
    </div>
  );
}

export default App;
