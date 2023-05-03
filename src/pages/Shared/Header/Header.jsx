
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container } from 'react-bootstrap';
const Header = () => {

    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>{' '}
                <Marquee className='text-danger text-' speed={70} gradientWidth={100}>
                    <h1>I can be a React component, multiple React components, or just some text.</h1>
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;