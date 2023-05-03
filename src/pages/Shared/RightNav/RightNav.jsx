import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login with</h4>
                <Button variant="outline-primary mb-2"><FaGoogle /> Login with Google</Button>{' '}
                <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>{' '}
            </div>
            <div className='mt-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='text-center w-100 my-4 py-4'>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;