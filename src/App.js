import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Navbar from './components/Navbar';
import Footer from 'components/Footer';
import MainStructure from 'components/MainStructure';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainStructure />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
