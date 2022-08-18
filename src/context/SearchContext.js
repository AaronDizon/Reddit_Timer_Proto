import {useState, createContext} from 'react';

const  SearchContext = createContext()

const SearchProvider = ({children}) => {

    const [infoSearched, setInfoSearched] = useState(false);
    
    const state = {
        infoState: [infoSearched, setInfoSearched]
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