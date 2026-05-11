import { Routes, Route } from 'react-router-dom';
import MainPortfolio from './pages/MainPortfolio';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPortfolio />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
