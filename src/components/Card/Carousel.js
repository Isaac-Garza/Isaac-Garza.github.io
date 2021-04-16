import React from 'react';
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap';

import Card from './Card';
import Octicons from '../../assets/images/Octicons.png';
import myProfile from '../../assets/images/myProfile.jpg';
import repositoryIcon from '../../assets/images/capstone-icon.png';



class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'GitHub',
                    subTitle: 'What I\'ve worked on.',
                    imgSrc: Octicons,
                    link: 'https://github.com/Isaac-Garza',
                    selected: false
                },

                {
                    id: 1,
                    title: 'Isaac Garza',
                    subTitle: 'This is Who I am',
                    imgSrc: myProfile,
                    link: 'https://www.linkedin.com/in/isaac-garza957/',
                    selected: false
                },

                {
                    id: 2,
                    title: 'Latest Works',
                    subTitle: 'CI Tutor App',
                    imgSrc: repositoryIcon,
                    link: 'http://www.isaac-garza.icheadache.cikeys.com/',
                    selected: false
                },
            ]
        }

    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
          
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container style={{zIndex: "5"}} fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;