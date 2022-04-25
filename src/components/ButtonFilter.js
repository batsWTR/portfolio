import "../styles/ButtonFilter.css";


function ButtonFilter(props){
    return(
        <button className="buttonFilter" title={ props.name }>{ props.name }</button>
    )
}

export default ButtonFilter