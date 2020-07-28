import React from 'react';
import Hero from '../components/Hero'
import Content from '../components/Content'


function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            
            <Content>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec.</p>
                <p>Porta lorem mollis aliquam ut porttitor leo a diam. Risus pretium quam vulputate dignissim suspendisse in est ante. Tempor nec feugiat nisl pretium fusce id velit ut tortor.</p> 
                <p>Lacus luctus accumsan tortor posuere. Tincidunt vitae semper quis lectus. Urna nunc id cursus metus aliquam eleifend mi. Nunc sed augue lacus viverra vitae. Ornare arcu odio ut sem nulla pharetra. Diam vulputate ut pharetra sit amet.</p>
            </Content>
        </div>
    );
}

export default AboutPage;