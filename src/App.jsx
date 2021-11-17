import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {React, useEffect, useState} from 'react';
import Main from './Views/Main';
import {Router} from '@reach/router';


function App() {
  


  return (
    <div className="App">
      <header className="p-3">
        <h1>Use the Force</h1>
      </header>
      <Router>
        <Main path='/' />
      </Router>
    </div>
  );
}

export default App;
