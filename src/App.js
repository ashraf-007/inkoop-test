import Nav from './Components/Nav'
import './App.css';
import Featured from './Components/Featured';
import Hero from './Components/Hero';
import Social from './Components/Social';



function App() {
  return (
    <div className="App">
      <main className='main'>

      <Nav />
      <Hero />
      <Social />
      <Featured />
      </main>
    
    </div>
  );
}

export default App;
