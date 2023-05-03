import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <div>
            <Card className="">
                <Card.Header className='d-flex align-items-center justify-content-center'>
                    <Image className='mt-0' style={{ height: '40px', width: '40px' }} src={author?.img} roundedCircle />
                    <div className='ps-2 flex-grow-1'>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{moment(author?.published_date).format('yyyy-MM-D')}</p>
                    </div>
                    <div className=''>
                        <FaRegBookmark />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details} </> : <>{details.slice(0, 250)}... <Link className='text-danger font-monospace text-decoration-none ' to={`/news/${_id}`}>Read more</Link></>}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating>
                            
                            placeholderRating={rating.number}
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        </Rating>
                        <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye />{total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;