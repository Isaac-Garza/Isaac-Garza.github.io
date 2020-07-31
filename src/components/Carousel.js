import React from 'react';
import Container from 'react-bootstrap/Container'

import Card from '../components/Card';

import Octicons from '../assets/images/Octicons.png';
import centerCardImg from '../assets/images/centerCardImg.png';
import rightCardImg from '../assets/images/rightCardImg.png';
import { Row } from 'react-bootstrap';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'GitHub',
                    subTitle: 'What I\'ve been working on.',
                    imgSrc: Octicons, 
                    link: 'https://google.com',
                    selected: false
                },

                {
                    id: 1,
                    title: 'Isaac Garza',
                    subTitle: 'This is Who I am',
                    imgSrc: centerCardImg, 
                    link: 'https://google.com',
                    selected: false
                },

                {
                    id: 2,
                    title: 'Right Card',
                    subTitle: 'This is the right card',
                    imgSrc: rightCardImg, 
                    link: 'https://google.com',
                    selected: false
                },
            ]
        }
        
    }

    handleCardClick = (id, card) => {

        console.log(id);

        let items =[...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id)
            {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items)  => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;