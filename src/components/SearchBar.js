import {React, useState} from 'react'
import styles from '../Styling/SearchBar.module.css'

const SearchBar = () => {

    const [description, setDescription] = useState('')

    const postForm = async(e) => {
        e.preventDefault()
        await console.log(description)
        setDescription('')
    }

  return (
    <div>
        <p>Search Bar</p>
        <form className={styles.form} onSubmit={postForm}>
            <input value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            <input className={styles.submitButton} type='submit' value= 'Post' />
        </form>

    </div>
  )
}

export default SearchBar