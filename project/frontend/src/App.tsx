import LandingPage from './pages/landingPage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import LoginPage from './pages/login/LoginPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import './style/global.scss'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
