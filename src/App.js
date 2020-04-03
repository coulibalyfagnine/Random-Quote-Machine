import React from 'react';
import './App.css';
import './index.scss';
//import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 //import Gadget from './Gadget';
 import Card from './Card';
library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <header className="App-header bg-navy">
        <Card />
      </header>
    </div>
  );
}

export default App;
