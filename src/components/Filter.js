import React from 'react';
import '../styles/Filter.css';
import ButtonFilter from './ButtonFilter';



class Filter extends React.Component{
    constructor(props){
        super(props);
        const elements = this.props

        this.state = elements;
    }
    
    handleClick(ev){
        console.log(ev.target.title);
        const it = this.state;

        it.items.map((el,id,ar)=>{
            el.isActive = false;
            if(el.name === ev.target.title){
                ar[id].isActive = true;
            }
        });

        this.setState(it);
 
    }

    render(){
        console.log(this.state);
        const list = this.state;
        const itemList =[];
    
        this.props.items.map((el,id) =>{
             itemList.push(<ButtonFilter name={ el.name } isActive={ el.isActive} key={el.name+id} />);
        });

        return(
            <div className="filter" onClick={this.handleClick.bind(this)}>
                { itemList }
            </div>
        );
    }
    
}


export default Filter