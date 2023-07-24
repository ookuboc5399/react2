import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [name, setName] = useState('');
  const handleOnChange = (e) => setName(e.target.value)
  const inputEl = useRef(null);
  const handleOnClick = () => inputEl.current.focus();

  return (
    <div className="App">
      <input ref={inputEl} type='text' value={name} onChange={handleOnChange} />
      <p>名前：{name}</p>
      <button onClick={handleOnClick}>inputにフォーカス</button>
    </div>
  );
}

export default App;
