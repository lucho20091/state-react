import Test from './components/Test'
import './App.css';
import {useState} from 'react'

function App() {


const [state, setState] = useState([{num: 1}, {num: 2}])
console.log(state)

function change(id, parametro){
  setState(prevState => prevState.map(item => item.num === id ? {...item, parametro: parametro} : item))
}

  return (
    <div className="App">
        <Test 
        change={change}
        />
    </div>
  );
}

export default App;
