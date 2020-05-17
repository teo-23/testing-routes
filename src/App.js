import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import {projects as Projects} from './Components/Projects';
import ProjectDetails from './Components/ProjectDetails';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import storage from 'local-storage-fallback';
import style from 'styled-theming';
import Button from './Components/Button';

const getBackground = style('mode' , {
  light: 'EEE',
  dark: '#111'
});

const getForeground = style('mode' , {
  light: 'EEE',
  dark: '#111'
});

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getForeground};
}
`;

function getInitialTheme() {
  const savedTheme = storage.getItem('theme')
  return savedTheme ?JSON.parse(savedTheme) : { mode: 'light'}
}


export default function App() {
    const [theme, setTheme] = useState(getInitialTheme)
    return (
      <ThemeProvider theme= {theme}>
      <>
      <GlobalStyle/>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />
        </Switch> 
        <button
            onClick = {e =>
            setTheme(
              theme.mode === 'dark'
              ? { mode: 'light' }
              : { mode: 'dark' }
            )
            }
          >
          Toggle Theme
          </button>
      </div>
      </>
      </ThemeProvider>
    );
}


// class App extends Component {
//   render() {
//     const [theme, setTheme] = useState({ mode: 'light'})
//     return (
//       <ThemeProvider theme= {theme}>
//       <>
//       <GlobalStyle/>
//       <div className="App">
//         <Navbar />
//         <Switch>
//           <Route exact path='/' component={Home}/>
//           <Route path='/about' component={About}/>
//           <Route exact path='/projects' component={Projects}/>
//           <Route exact path="/projects/:id" component={ProjectDetails} />
//         </Switch> 
//       </div>
//       </>
//       </ThemeProvider>
//     );
//   }
// }

// export default App;
