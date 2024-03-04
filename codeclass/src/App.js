import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './View/HomePage';
import Projects from './View/Projects';
import Apply from './View/Apply';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className=" bg-info">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </div>
  );
}

export default App;
