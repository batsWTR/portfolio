import '../styles/Header.css';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import HeaderIcones from './HeaderIcones';

function Header(props){
    return(
        <header>
            <HeaderMenu click={ props.click} />
            <HeaderSearch />
            <HeaderIcones />
        </header>
    );
}


export default Header