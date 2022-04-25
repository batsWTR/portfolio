import '../styles/Filter.css';
import ButtonFilter from './ButtonFilter';



function Filter(){
    const items = ['Tous', 'Expériences', 'Réalisations', 'Diplômes', 'Hobbies'];
    const itemList =[];

    items.map((el,id) =>{
         itemList.push(<ButtonFilter name={ el }/>);
    });

    console.log(itemList);

    return(
        <div className="filter">
            { itemList }
        </div>
    );
}

export default Filter