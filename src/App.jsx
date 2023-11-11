import { BrowserRouter } from 'react-router-dom';
import {
  NavBar
} from './components';
//import { useState } from 'react';
//import zeldaPicture from './assets/zelda_under_table.jpg';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavBar />
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;
