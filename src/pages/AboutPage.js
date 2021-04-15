import React from 'react';
import Hero from '../components/Hero'
import Content from '../components/Content'


function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            
            <Content>
                <p>My name is Isaac Garza, I am a Software Enginner, Game Developer, and Web Developer. </p>
                <p>I've been programming for 5 years and still continue to learn new techniques.</p> 
                <p></p>
            </Content>
        </div>
    );
}

export default AboutPage;