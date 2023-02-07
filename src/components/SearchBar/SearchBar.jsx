import React from 'react'
import { Search as SearchIcon } from 'react-bootstrap-icons';
import s from './style.module.css';

// STATEFULL
const SearchBar = ({ onSubmit }) => {
    function submit(e) {
      if (e.key === "Enter" && e.target.value.trim() !== "") {
        onSubmit(e.target.value);
      }
    }


    return (
      <>
        <SearchIcon size={27} className={s.icon} />
        <input
        onKeyUp={submit} 
        className={s.input}
        type="text"
        placeholder={"Search a tv show you my like"}  
        />
      </>
    
    ) 
}

export default SearchBar

