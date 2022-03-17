import { FaSearch } from 'react-icons/fa';
import classes from './SearchBox.module.css';
import { useState } from 'react';

const SearchBox = (props)=> {
    const [title, setTitle] = useState("");

    const handleInput = (e)=>{
        setTitle(e.target.value);
    }
    

    return (
        <>
          <div className={classes.searchbox}>
              <input placeholder='Search by keyword...' ref={props.title_ref} name="title" value={title} onChange={handleInput} className={classes.searchbox__input} />
              <button onClick={props.onSearch} className={classes.searchbox__icon}><FaSearch size={20}/></button>
          </div>
        </>
    )
}

export default SearchBox;