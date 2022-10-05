import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ExampleComponent } from './Components/ExampleComponent/ExampleComponent';
import { nodeApi } from './common/node-api-declaration';

export default function App() {
  console.log('nodeApi app', nodeApi);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExampleComponent />} />
      </Routes>
    </Router>
  );
}
