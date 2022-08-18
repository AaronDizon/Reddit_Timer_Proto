import {React, useState, useContext} from 'react'
import { SearchContext } from '../context/SearchContext'
import styles from '../Styling/SearchBar.module.css'

const SearchBar = () => {

    const {infoSearchedState, infoSearchStatusState} = useContext(SearchContext)
    const [infoSearchStatus, setInfoSearchStatus] = infoSearchStatusState
    const [infoSearched, setInfoSearched] = infoSearchedState

    const [description, setDescription] = useState('')

    const postForm = async(e) => {
        try {
            e.preventDefault()
            await console.log(description)
            setInfoSearched(description)
            setInfoSearchStatus(true)

        } catch (e) {
            console.log(e)
        }
    }

  return (
    <div>
        <p className={styles.title}>Search Bar</p>
        <form className={styles.form} onSubmit={postForm}>
            <input value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            <input className={styles.submitButton} type='submit' value= 'Post' />
        </form>

    </div>
  )
}

export default SearchBar