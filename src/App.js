import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import PoliticalQuiz from './pages/political_trivia';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/political_trivia' element={<PoliticalQuiz/>} />
    </Routes>
    </Router>
);
};
  
export default App;