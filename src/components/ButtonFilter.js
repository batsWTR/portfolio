import "../styles/ButtonFilter.css";


function ButtonFilter(props){
    return(
        <button className={props.isActive ? "buttonFilter active" : "buttonFilter"} title={ props.name }>{ props.name }</button>
    )
}

export default ButtonFilter