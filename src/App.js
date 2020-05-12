// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js


// App.js

import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import {projects as Projects} from './Components/Projects';
import ProjectDetails from './Components/ProjectDetails';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
