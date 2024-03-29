import {React, useState, useContext} from 'react'
import { SearchContext } from '../context/SearchContext'
import axios from 'axios'
import Info from './Info'
import styles from '../Styling/SearchBar.module.css'
import { IoSearchOutline } from "react-icons/io5";
import { MdClear } from "react-icons/md";

const SearchBar = () => {

    const {infoSearchStatusState, descriptionState, loadedState, errorState, dataState} = useContext(SearchContext)
        const [infoSearchStatus, setInfoSearchStatus,] = infoSearchStatusState
        const [description, setDescription] = descriptionState
        const [loaded, setLoaded] = loadedState
        const [error, setError] = errorState
        const [data, setData] = dataState


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
                        console.log(response.data.data)
                        //console.log(response.data.data.children[0].data)
                        for (let j = 0; j < postsPerRequest; j++) {
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
                            tempString = response.data.data.after
                           
                            
                    })
            }
            setLoaded(true)
            //console.log(infoArray)
        } catch (error) {
            setLoaded(true)
            setError(true)
            console.log(error)
        }
    }

    const postForm = (e) => {
        setLoaded(false)
        setError(false)
        e.preventDefault()
        getInfo()
        setInfoSearchStatus(true)
    }

    const clearDescription = () => {
        setDescription('')
    }

  return (
    <div>
        <form className={styles.form} onSubmit={postForm}>
            <div className={styles.submitButton} onClick={postForm}> <IoSearchOutline size="25px"/> </div>
            <input className={styles.input} value={description} placeholder="Search" onChange={(e)=>{setDescription(e.target.value)}}/>
            {description != '' ?  <MdClear onClick = {clearDescription} size="25px" className={styles.clearButton}/>: <p />}

        </form>
    </div>
  )
}

export default SearchBar