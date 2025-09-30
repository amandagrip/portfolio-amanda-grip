import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Amanda Grip - Portfolio</h1>
        <h2>Fullstackutvecklare - STI ht24-vt26</h2>
        <p>Jag heter Amanda och pluggar till fullstackutvecklare på STI i liljeholmen. 
          Detta är min portofolio där jag presenterar mina kompetenser.
        </p>
        <h5>Javaprogrammering A & B</h5>
        <h5>Databashantering</h5>
        <h5>Frontendutveckling och ramverk</h5>
        <h5>Webbutveckling</h5>
        <h5>Agil projektmetodik</h5>
        <h5>TDD</h5>
        <h5>IT och informationssäkerhet</h5>
        <h5>Webservices</h5>
        <h5>Java Enterprise och Eclipse</h5>
        <h5>Molntjänster</h5>
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
