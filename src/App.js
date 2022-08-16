import {useEffect, useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Title from './components/Title';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      
        <Title />
        <SearchBar />
        <p>Hello World</p>
      
    </div>
  );
}

export default App;
