import {useContext} from 'react';
import { SearchContext } from './context/SearchContext';
import styles from './Styling/App.module.css'
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
      <div className={styles.topBar}>
        <Title />
        <SearchBar />
      </div>
      <div className="body">
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
