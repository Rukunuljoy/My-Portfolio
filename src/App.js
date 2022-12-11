import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Skill from './components/Skill';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home/>
      <SocialLinks/>
      <About></About>
      <Portfolio></Portfolio>
      <Skill></Skill>
      <Blogs></Blogs>
      <Contact></Contact>
    </div>
  );
}

export default App;
