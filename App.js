import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [age, getAge] = useState(0);
    const [loverLimit, getLoverLimit]=useState(0)
    const [upperLimit, getUpperLimit]=useState(0)
  function calculate(){
    getLoverLimit((220-age)*0.65);
    getUpperLimit((220-age)*0.85);
}
  return (
    <div>
      <h1>Heart rate limits</h1>
      <form>
        <div>
          <h3>Age</h3>
          <label></label>
          <input type="number" value={age} onChange={e => getAge(e.target.value)}/>
        </div>
        <div>
          <h3>Heart rate limits</h3>
          <label></label>
          <output type="number">{loverLimit} - {upperLimit}</output>
          
        </div>
          <button type="button" onClick={calculate}>Calculate</button>
      </form>    
    </div>
  );
}

export default App;
