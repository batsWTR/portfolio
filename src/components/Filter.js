
import '../styles/Filter.css';
import ButtonFilter from './ButtonFilter';



function Filter(props){
    
    function handleClick(ev){
        props.filterChoice(ev.target.title);
    }


    const itemList =[];
    
    props.items.map((el,id) =>{
        itemList.push(<ButtonFilter name={ el.name } isActive={ el.isActive} key={el.name+id} />);
    });

    return(
        <div className="filter" onClick={ handleClick }>
            { itemList }
        </div>
    );
    
    
}


export default Filter