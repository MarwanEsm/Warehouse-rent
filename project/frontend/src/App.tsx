import LandingPage from './pages/landingPage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import LoginPage from './pages/login/LoginPage';
import './style/global.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
