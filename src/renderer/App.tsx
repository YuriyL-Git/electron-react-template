import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import api from './common/api';

const Hello = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = async () => {
    const result = await api.firstApi.execute();
    console.log('RESULT =', result);
    setIsVisible(false);
    api.secondApi.executeSecond();
  };

  return (
    <div>
      <button onClick={handleClick} type="button" style={{}}>
        Click
      </button>
      {isVisible && <button type="button">Test</button>}
    </div>
  );
};
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
