// States
import { useState } from 'react';

// Style
import './App.css';
// Components
import Display from './components/Display';
import Form from './components/Form';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <Form />
        <Display />
      </div>
    </div>
  );
}

export default App;
