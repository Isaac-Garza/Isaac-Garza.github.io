import React from 'react';

import style from './stars.module.scss';
import $ from 'jquery';

const createStars = () => {
    for (let i = 0; i < 30; i++) {
        console.log(i);
        var numRand = Math.floor(Math.random() * 501),
            divsize = 500,
            posx = (numRand * ($('.background').width() - divsize)).toFixed(),
            posy = (numRand * ($('.background').height() - divsize)).toFixed(),
            randomAD = Math.random() + 's';
        let newdiv = $("<div class='star  star" + i + "'></div>").css({
            'left': posx + 'px',
            'top': posy + 'px',
            'animation-delay': randomAD,
        });
        newdiv.appendTo('.background');
    
    }
}

const Stars = () => {

    return (
        <div class={style.background}>
            {createStars}
        </div>
    );
}

export default Stars;