import '../styles/Filter.css';
import ButtonFilter from './ButtonFilter';



function Filter(){
    return(
        <div className="filter">
            <ButtonFilter name="Expérience"/>
            <ButtonFilter name="diplomes" />
        </div>
    );
}

export default Filter