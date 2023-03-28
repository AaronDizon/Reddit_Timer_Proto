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
        <div className={styles.header}>
          <Title />
        </div>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
      </div>
      <div className="body">
      {infoSearchStatus === false ? 
      <div>
      <p>Welcome to Reddit Timer!</p>
      <p>For the best results, type the subreddit exactly how it is on the reddit website.
      </p> 
      </div>
      : 
                loaded === false? 
                    <p>loading...</p> :
                        error === false? <Info data={data}/> :
                        <div>
                        <p>An error as occured!</p>
                        <p>Check for spelling</p>
                        <p>If you typed your subreddit of choice correctly, then the number of posts on that subreddit is too small of a sample size :(</p>
                        </div>
            }
      </div>  
      
    </div> 
  );
}

export default App;
