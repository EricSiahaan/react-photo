
import React from "react";
import Caresoul from "../Components/Caresoul";
import Navigation from "../Components/Navbar";
import wed1 from "../assets/images/wedding1.jpg";
import wed2 from "../assets/images/wedding2.jpg";
import wed3 from "../assets/images/wedding3.jpg";
import wed4 from "../assets/images/wedding4.jpg";
import wed5 from "../assets/images/wedding5.jpg";
import wed6 from "../assets/images/wedding6.jpg";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from "../Components/Footer";

const Wedding = () => {
    return (
        <>
            <Navigation />
            <Caresoul />
            <CardGroup className="mt-3 m-3 mb-0 gap-1" >
                <Card>
                    <Card.Img variant="top" src={wed1} />
                </Card>
                <Card>
                    <Card.Img variant="top" src={wed2} />
                </Card>
                <Card>
                    <Card.Img variant="top" src={wed3} />
                </Card>

            </CardGroup>
            <CardGroup className="p-3 gap-1 mt-0" >
                <Card>
                    <Card.Img variant="top" src={wed4} />
                </Card>
                <Card>
                    <Card.Img variant="top" src={wed5} />
                </Card>
                <Card>
                    <Card.Img variant="top" src={wed6} />
                </Card>

            </CardGroup>
            <Footer />
        </>
    );
};

export default Wedding;