import {useEffect, useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import axios from 'axios'
import { SearchContext } from './context/SearchContext';
import './App.css';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Info from './components/Info';

function App() {

  const {infoSearchStatusState, loadedState, errorState, dataState} = useContext(SearchContext)
  const [infoSearchStatus, setInfoSearchStatus] = infoSearchStatusState 
  const [loaded, setLoaded] = loadedState
  const [error, setError] = errorState
  const [data, setData] = dataState

  return (
    <div className="App">
      <div>
        <Title />
        <SearchBar />
      </div>
      <div>
      {infoSearchStatus === false ? <p>Hello</p> : 
                loaded === false? 
                    <p>loading...</p> :
                        error === false? <Info data={data}/> :
                        <p>There is an error</p>
            }
      </div>  
      
    </div> 
  );
}

export default App;
