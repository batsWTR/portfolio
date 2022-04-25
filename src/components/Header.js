import '../styles/Header.css';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import HeaderIcones from './HeaderIcones';

function Header(){
    return(
        <header>
            <HeaderMenu />
            <HeaderSearch />
            <HeaderIcones />
        </header>
    );
}


export default Header