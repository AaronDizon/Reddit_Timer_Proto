import {useEffect, useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import axios from 'axios'
import { SearchContext } from './context/SearchContext';
import './App.css';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Info from './components/Info';

function App() {

  const {infoSearchStatusState, infoSearchedState} = useContext(SearchContext)
  const [infoSearchStatus, setInfoSearchStatus] = infoSearchStatusState 
  const [infoSearched, setInfoSearched] =infoSearchedState

  return (
    <div className="App">
      
        <Title />
        <SearchBar />
        
      
    </div> 
  );
}

export default App;
