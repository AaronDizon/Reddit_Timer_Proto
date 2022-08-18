import {useState, createContext} from 'react';

const  SearchContext = createContext()

const SearchProvider = ({children}) => {

    const [infoSearchStatus, setInfoSearchStatus] = useState(false);
    const [infoSearched, setInfoSearched] = useState('')
    const [test, setTest] = useState('test')

    const state = {
        infoSearchStatusState: [infoSearchStatus, setInfoSearchStatus],
        infoSearchedState: [infoSearched, setInfoSearched], 
        testState: [test, setTest]
    
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