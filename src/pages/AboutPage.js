import React from 'react';
import Hero from '../components/Hero'
import Content from '../components/Content'


function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            
            <Content>
                <p>My name is Isaac Garza, I am a Software Enginner, Game Developer, and Web Developer. </p>
                <p>I've alway in search of new techniques and finding challenging problems that can expand my knowledge and skills.</p> 
                <p></p>
            </Content>
        </div>
    );
}

export default AboutPage;