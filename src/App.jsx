import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { plusNumber, minusNumber } from "./redux/modules/calculator";
import { useState } from "react";

function App() {

  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator.number)
  const [number,setNumber] = useState(0);

  const onChange = (e) => {
    setNumber(e.target.value);
  }

  const handlePlusNum = () => {
    dispatch(plusNumber(Number(number)));
  }

  const handleMinusNum = () => {
    dispatch(minusNumber(Number(number)));
  }

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={number} onChange={onChange}/> 만큼을 <button onClick={handlePlusNum}>더할게요</button> <button onClick={handleMinusNum}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
