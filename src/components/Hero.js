import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <div class="background">
                    <div class="rocketCon">
                        <div class="flame"></div>
                        <div class="rocketBase"></div>
                        <div class="rocket">
                            <div class="window">
                            </div>
                        </div>
                    </div>
                    <div class="rocketNose"></div>
                    <div class="bottomWing"></div>
                    <div class="topWing"></div>
                </div>

                <Row className="justify-content-center py-5">
                    <Col md={8} sm={6}>
                        {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                        {props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>}
                        {props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
                    </Col>
                </Row>

            </Container>

        </Jumbotron>
    );
}

export default Hero;