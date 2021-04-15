import React from 'react';

import CardInfo from '../Card/CardInfo';

function Card(props) {

    return (
        <div className="d-inline-block ig-card" onClick={(e) => props.click(props.item)}>
            <img className="ig-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
        </div>
        // <div className="container">
        //     <div className="card">
        //         <div className="front">Click to flip</div>
        //         <div className="back">Yo, what up?</div>
        //     </div>
        // </div>
    );
}


export default Card;