import '../styles/HeaderMenu.css'
import logoSvg from '../youbats.png';

function HeaderMenu(props){
    function click(ev){
        props.click();
    }
    return(
        <div className="logo">
            <i onClick={ click }><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"  ><g ><path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" ></path></g></svg></i>
            <div>
                <img src={logoSvg} alt="logo YoutBats" title="Accueil YouBats" />
            </div>
            
        </div>
    );
}

export default HeaderMenu;