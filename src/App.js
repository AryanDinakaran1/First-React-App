import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Hello, World!</p>

      <Info></Info>
    </div>
  );
}

function Info() {

  const title = "We are cool!"
  return (
    <div>
      <h1>Inventory System</h1>
      <p>{ title }</p>
    </div>
  )
}

export default App;
