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
    const [data, setData] = useState([])

    const postsPerRequest = 100
    const maxPostsToFetch = 500
    const maxRequests = maxPostsToFetch/ postsPerRequest

    let infoArray = []

    const getInfo = async (e) => {
        try {
            let tempString = ''

            for(let i = 0; i < maxRequests; i++){
                console.log(tempString)
                await axios.get(`https://www.reddit.com/r/${description}/top/.json?t=year&limit=${postsPerRequest}&after=${tempString}`)
                    .then((response) => {
                        //console.log(response.data.data)
                        //console.log(response.data.data.children[0].data)
                        for (let j = 0; j < 25; j++) {
                            let {author, title, selftext, created_utc, url_overridden_by_dest} = response.data.data.children[j].data
                            let tempObj = {
                                author: author,
                                title: title,
                                post: selftext,
                                time: new Date(created_utc * 1000),
                                image: url_overridden_by_dest
                            }
                            infoArray = [...infoArray, tempObj]
                            setData(infoArray)
                        }
                        
                        // for (let j = 0; j < 100; j++) {
                            //     // setInfoSearched(...infoSearched, response.data.data.children[j].data)
                            // }
                            tempString = response.data.data.after
                            //console.log(infoArray)
                            
                    })
            }
            //console.log(data)
            setLoaded(true)
        } catch (error) {
            console.log(error)
        }
    }

    const postForm = (e) => {
        e.preventDefault()
        getInfo()
        setInfoSearchStatus(true)
    }

  return (
    <div>
        <p className={styles.title}>Search Bar</p>
        <form className={styles.form} onSubmit={postForm}>
            <input value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            <input className={styles.submitButton} type='submit' value= 'Post' />
            {infoSearchStatus === false ? <p>Hello</p> : 
                loaded === false? 
                    <p>loading...</p> :
                    <Info data={data}/>
            }
        </form>

    </div>
  )
}

export default SearchBar