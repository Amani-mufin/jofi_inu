import Hero from './components/Hero';
import About from './components/About';
import backgroundImage from './assets/glowbg.png';
import Video from './components/Video';
import Ecosystem from './components/Ecosystem';

function App() {
  return (
    <div>
      <div
        className="relative bg-cover bg-no-repeat min-h-screen pb-32"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>

        <div className="relative z-10">
          <Hero />
          <About />
        </div>
      </div>
      <div
        className="relative bg-cover bg-no-repeat min-h-screen"
        style={{ backgroundImage: `url(${backgroundImage})`,   backgroundPosition: 'left center' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>

        <div className="relative z-10">
          <Video />
          <Ecosystem />
        </div>
      </div>
    </div>

  );
}

export default App;
