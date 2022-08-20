import {React, useState, useContext} from 'react'
import { SearchContext } from '../context/SearchContext'
import axios from 'axios'
import Info from './Info'
import styles from '../Styling/SearchBar.module.css'

const SearchBar = () => {

    const {infoSearchedState, infoSearchStatusState} = useContext(SearchContext)
    const [infoSearchStatus, setInfoSearchStatus] = infoSearchStatusState
    const [infoSearched, setInfoSearched] = infoSearchedState

    const [description, setDescription] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [after, setAfter] = useState('nothing')

    const postsPerRequest = 100
    const maxPostsToFetch = 500
    const maxRequests = maxPostsToFetch/ postsPerRequest

    const getInfo = async (e) => {
        try {
            for(let i = 0; i < maxRequests; i++){
            await axios.get(`https://www.reddit.com/r/${description}.json?limit=${postsPerRequest}${
                after !== 'nothing'? '&after=' + after : ''}`)
                .then((response) => {
                    console.log(response.data.data)
                    console.log(response.data.data.after)
                    setAfter(response.data.data.after)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const postForm = async(e) => {
        e.preventDefault()
        getInfo()
        setInfoSearchStatus(true)
        setLoaded(true)
    }

  return (
    <div>
        <p className={styles.title}>Search Bar</p>
        <form className={styles.form} onSubmit={postForm}>
            <input value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            <input className={styles.submitButton} type='submit' value= 'Post' />
            {infoSearchStatus === false ? <p>Hello</p> : 
                loaded ===false? 
                    <p>loading...</p> :
                    <Info />
            }
        </form>

    </div>
  )
}

export default SearchBar