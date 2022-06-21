/* eslint-disable */
import './App.css';

function App() {
  return (
    <div>
    <div className='Nav'><p>TEST</p></div>
    <p id='p'>서버와의 데이터 통신과는 별개로 DOM을 직접적으로 조작해야하는 기존의 웹 화면 개발 방식과 달리, React는 DOM을 직접적으로 조작하지 않고 데이터가 변화할 때 변경사항이 적용된 Virtual DOM을 만든다. 그 다음 실제 DOM과 Virtual DOM의 차이점을 비교하고, 변경된 부분을 실제 DOM에 적용한다.
    </p>
    </div>
  );
}

export default App;
