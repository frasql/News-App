import classes from './Header.module.css';
import SearchBox from './SearchBox';
import { useRef } from 'react';


const Header = (props)=>{
    return (
        <header className={classes.header}>
          <div className={classes.header__logo}>
            <img />Logo
          </div>
          <div className={classes.header__searchbox}>
            <SearchBox title_ref={props.title_ref} onSearch={props.onSearch} />
          </div>
          <div className={classes.header__end}>
          </div>
        </header>
    )
}

export default Header;