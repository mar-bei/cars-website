import './App.css';
import FeaturedCars from './components/FeaturedCars';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import News from './components/News';
import OurMission from './components/OurMission';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <FeaturedCars/>
      <WhyChooseUs/>
      <OurMission/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
