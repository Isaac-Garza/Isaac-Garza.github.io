import React from 'react';
import $ from 'jquery';

import styles from '../stars/stars.module.scss';


var NUMBER_OF_STARS = 30;

function generateStars(starContainer) {
    var container = document.createElement("div");
    var blockDiv;

    for(var index = 0; index < NUMBER_OF_STARS; index++)
    {
        blockDiv = $("<div className={styles.shooting_star}></div>").addClass("styles.shooting_star").appendTo(container);
    }
}

const shootingStar = () => {
    return (
        <div className={styles.night}>
            {/* {generateStars} */}
            <div className={styles.shooting_star}></div>
            <div className={styles.shooting_star}></div>
            <div className={styles.shooting_star}></div>
            <div className={styles.shooting_star}></div>
            <div className={styles.shooting_star}></div>
            <div className={styles.shooting_star}></div>
           
            
        </div>
    );
}



export default shootingStar;