//import logo from './logo.svg';
import './App.css';
import data from "./data/database";
import player from "./component/index";


//function App() {
//  return (
//    <div className="App">
//       <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//         Learn React
//        </a>
//      </header>
//    </div>
//  );
// }

function App() {
  const {
    album: {
      images: [imgSrc],
      artists: [artist],
      name: albumName,
    },
    name: title,
  } = data;

  return (
    <div className = "playlist">
      <div className = "playlist-card" >
        <h1>Play Music Now</h1>
        <player>
          <img src={imgSrc.url} className="playlist-img" alt="playlist card" width="210px" height="300px"/>
          <p>{title}</p>
          <p>{artist.name}</p>
          <p>{albumName}</p>
          <button>Select</button>
        </player>
      </div>

    </div>
  );


}



export default App;
