import HeroSection from './components/HeroSection'; // Updated import for the new UI
import FeaturesSection from './components/FeaturesSection';

function App() {
  return (
    <div className="App">
      <HeroSection /> 
      <FeaturesSection />
      
      <footer style={{ padding: '40px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
        <p>&copy; 2025 Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
