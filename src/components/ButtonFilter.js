import "../styles/ButtonFilter.css";


function ButtonFilter(props){
    return(
        <button className="buttonFilter">{ props.name }</button>
    )
}

export default ButtonFilter