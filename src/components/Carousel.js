import React from 'react';

import leftCardImg from '../assets/images/leftCardImg';
import centerCardImg from '../assets/images/centerCardImg';
import rightCardImg from '../assets/images/rightCardImg';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Left Card',
                    subTitle: 'This is the Left Card',
                    imgSrc: leftCardImg, 
                    links: 'https://google.com',
                    selected: false
                },

                {
                    id: 1,
                    title: 'Isaac Garza',
                    subTitle: 'This is Who I am',
                    imgSrc: centerCardImg, 
                    links: 'https://google.com',
                    selected: false
                },

                {
                    id: 2,
                    title: 'Right Card',
                    subTitle: 'This is the right card',
                    imgSrc: rightCardImg, 
                    links: 'https://google.com',
                    selected: false
                },
            ]
        }
        
    }

    render() {
        return (
            <p>Carousel Works!</p>
        );
    }
}

export default Carousel;