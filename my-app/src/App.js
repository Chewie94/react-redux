import './App.css';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash});
  }
  
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash});
  }

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => addCash(Number(prompt()))}>Add money</button>
        <button onClick={() => getCash(Number(prompt()))}>Get money</button>
      </div>
    </div>
  );
}

export default App;
