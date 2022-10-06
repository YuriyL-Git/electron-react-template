import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ExampleComponent } from './Components/ExampleComponent/ExampleComponent';
import { AppRoutes } from './common/routes';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExampleComponent />} />
      </Routes>
      <Routes>
        <Route
          path={AppRoutes.Route1}
          element={
            <div
              style={{
                color: '#000',
              }}
            >
              Route 1 component
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
