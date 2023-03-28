import {useState, createContext} from 'react';

const  SearchContext = createContext()

const SearchProvider = ({children}) => {

    const [infoSearchStatus, setInfoSearchStatus] = useState(false);
    const [infoSearched, setInfoSearched] = useState([])
    const [description, setDescription] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    const state = {
        infoSearchStatusState: [infoSearchStatus, setInfoSearchStatus],
        infoSearchedState: [infoSearched, setInfoSearched], 
        descriptionState: [description, setDescription],
        loadedState: [loaded, setLoaded],
        errorState: [error, setError],
        dataState: [data, setData]
    
    }

    return (
        <div>
            <SearchContext.Provider value={state}>
                {children}
            </SearchContext.Provider>
        </div>
    )

}

export { SearchContext, SearchProvider}