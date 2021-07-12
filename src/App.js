import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

componentDidMount() {
  axios.get('https://developer.spotify.com/dashboard/applications/eabe295c841b4c44a8948329648bdc78')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}


export default App;
