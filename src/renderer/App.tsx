import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ExampleComponent } from './Components/ExampleComponent/ExampleComponent';
import { AppRoutes } from './common/routes';
import Page1 from './Pages/Page1/Page1';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
      </Routes>
      <Routes>
        <Route path={AppRoutes.Route1} element={<ExampleComponent />} />
      </Routes>
    </Router>
  );
}
