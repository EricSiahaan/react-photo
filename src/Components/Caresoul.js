import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from "../assets/images/eric1.jpg"
import img2 from "../assets/images/samantha-gades-RHAtRIT3-CE-unsplash.jpg"
import img3 from "../assets/images/wedding1.jpg";
import img4 from "../assets/images/gallery6.jpg";
import img6 from "../assets/images/home7.jpg";
// import './Caresoul.css'

function Caresoul() {
    return (
        <Carousel className='caresoul-fade'>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={img1}
                    alt="First slide"
                    id='img-1'
                />
                <Carousel.Caption>
                    <h3>Wedding Photography</h3>
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Caresoul;