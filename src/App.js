import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Checkout from './Checkout';

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />
          <Routes>
            <Route path = "/" element={[ <Home />]} />
            <Route path="/checkout" element={[ <Checkout />]} />
            {/* <Route path = "/login" element={<Login />} /> */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
