import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Navbar from './components/Navbar';
import Footer from 'components/Footer';
import MainStructure from 'components/MainStructure';
import Post from 'pages/Post';
import ScrollToTop from 'components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainStructure />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
