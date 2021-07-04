import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Components/Header';
import Project from './Components/Project';
import Activity from './Components/Activity';

function App() {
  return (
    <HashRouter>
      <Header/>
      <Route exact path="/" component={Project}/>
      <Route exact path="/activity" component={Activity}/>
    </HashRouter>
  );
}

export default App;
