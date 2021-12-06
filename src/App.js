import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Index from './pages/Index';
import Questions from './pages/Questions';


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/react-quiz-app" element={<Index/>} />
      <Route path="/question" element={<Questions/>} />
    </Routes>
  </Router>
  );
}

export default App;
