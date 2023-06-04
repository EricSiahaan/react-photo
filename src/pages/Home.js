import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import home1 from "../assets/images/home1.jpg"
import home2 from "../assets/images/home2.jpg";
import home3 from "../assets/images/home3.jpg";
import home5 from "../assets/images/home5.jpg";
import home6 from "../assets/images/home6.jpg";
import home7 from "../assets/images/home7.jpg";
import home8 from "../assets/images/home-8.jpg";
import home4 from "../assets/images/home4.jpg";
import Caresoul from '../Components/Caresoul';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navbar';

function UncontrolledExample() {

    return (
        <>
            <Navigation />
            <Caresoul />
            <center className="mt-5 p-2"><h5>"Photography Adalah cara merasakan, menyentuh, mencintai. Apa yang kita tangkap di dalam kamera
                akan abadi selamanya, Mengingatkan hal-hal kecil yang mungkin akan terlupakan."</h5></center>
            <div className="mt-5 p-2">
                <CardGroup className="mt-5 p-0">
                    <Card>
                        <Card.Img variant="top" src={home1} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={home2} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={home3} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={home4} />
                    </Card>
                </CardGroup>
                <CardGroup className="mt-0 p-0">
                    <Card>
                        <Card.Img variant="top" src={home5} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={home6} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={home7} />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={home8} />
                    </Card>
                </CardGroup>
            </div>


            <Footer />
        </>
    );
}

export default UncontrolledExample;