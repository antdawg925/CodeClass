import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './View/HomePage';
import Projects from './View/Projects';
import Apply from './View/Apply';
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import logo from '../src/Pictures/logo.png';


function App() {
  return (
    <div className=" bg-info">
      <Helmet>
        <title>The Coding Class For Kids</title>
        <meta name="description" content="Unlock your child's potential with engaging online coding classes tailored for young minds at TheCodingClassForKids.com." />
        <meta property="og:title" content="The Coding Class For Kids" />
        <meta property="og:description" content="Description of your website" />
        <meta property="og:image" content={logo} /> {/* Image URL */}
        <meta property="og:url" content="Your website URL" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </div>
  );
}

export default App;
