import {useState, useContext} from 'react';
import { SearchContext } from './context/SearchContext';
import styles from './Styling/App.module.css'
import './App.css';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Info from './components/Info';
import FadeLoader from "react-spinners/FadeLoader";
import Footer from './components/Footer';

function App() {

  const {infoSearchStatusState, loadedState, errorState, dataState} = useContext(SearchContext)
  const [infoSearchStatus, setInfoSearchStatus] = infoSearchStatusState 
  const [loaded, setLoaded] = loadedState
  const [error, setError] = errorState
  const [data, setData] = dataState

  const [color, setColor] = useState('orange')

  return (
    <div className={styles.container}>
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
      <div className={styles.bodyDescription}>
        <p className={styles.passage}>Welcome to Reddit Timer!</p>
        <p className={styles.passage}>For the best results, type the subreddit exactly how it is on the reddit website.
        </p> 
      </div>
      : 
                loaded === false? 
                <div className={styles.loaderContainer}>
                <FadeLoader className={styles.loading}
                color={color}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              /></div>:
                        error === false? <Info data={data}/> :
                        <div className={styles.bodyDescription}>
                          <p className={styles.passage}>An error as occured!</p>
                          <p className={styles.passage}>Check for spelling</p>
                          <p className={styles.passage}s>If you typed your subreddit of choice correctly, then the number of posts on that subreddit is too small of a sample size :(</p>
                        </div>
            }
      </div>  
      <hr />
      <Footer />
    </div> 
  );
}

export default App;
