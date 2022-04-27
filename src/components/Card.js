import '../styles/Card.css';



function Card(props){

    function cardClick(){
        console.log('click card ',props.info.title);
    }
    
    return (
        <article className="card" onClick={ cardClick }>
            <div className="card-img"><img src={ props.info.image } alt={ props.info.title } /></div>
            <div className="card-content">
                <div className="card-content-user">B</div>
                <div>
                    <h3>{ props.info.title}</h3>
                    <p>{ props.info.description }</p>
                    <p>{ props.info.view }</p>
                </div>
                <div className="card-content-svg">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path></g></svg>
                </div>
            </div>
        </article>
    );
}

export default Card