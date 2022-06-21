/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [a, astate] = useState(['남자코트 추천', '강남 맛집추천', '파이썬독학']);
  let [good, goodstate] = useState(0);
  return (
    <div className="App">
      <div className='nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{a[0]} <span onClick={()=>{goodstate(good+1)}}>👍</span> {good}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{a[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
      <div>
        <span onClick={()=>{
          let copied = [...a];
          copied[0] = '여자코트 추천';
          astate(copied);
          }}> 버튼</span>
      </div>
      <button onClick={()=>{
        let list = [...a];
        list = list.sort();
        astate(list);
      }}>
        가나다정렬
      </button>
    </div>
  );
}
function Modal(a){
  return (
    <div className='list'>
      <h4>{a[0]}</h4>
      <p>내용</p>
    </div>
  )
}

export default App;
