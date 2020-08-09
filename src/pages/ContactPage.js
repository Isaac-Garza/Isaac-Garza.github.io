import React from 'react';

import { 
    Row
} from 'react-bootstrap';

import { MdMail } from 'react-icons/md';
import { IoLogoGithub } from 'react-icons/io';
import { GrLinkedin } from 'react-icons/gr';


import Hero from '../components/Hero';


class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            name: '',
            email: '',
            messenge: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkBox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });
    }

    render() {
        return(
            <div>
                <Hero title={this.props.title} />
                <div>
                    <Row className="justify-content-center">
                        <button class="btn" onClick={() => window.location.href = "mailto:igarza957@yahoo.com"}><MdMail size='7em'/></button>
                        <button class="btn" onClick={() => window.location.href = "https://www.linkedin.com/in/isaac-garza957/"}><GrLinkedin size='7em'/></button>
                        <button class="btn" onClick={() => window.location.href = "https://github.com/Isaac-Garza"}><IoLogoGithub size='7em'/></button>
                    </Row>
                </div>
            </div>
        );
    }
    
}

export default ContactPage;