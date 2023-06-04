import React from "react";
import Caresoul from "../Components/Caresoul";
import Navigation from "../Components/Navbar";
import wed1 from "../assets/images/blog1.jpg";
import wed2 from "../assets/images/wedding2.jpg";
import wed3 from "../assets/images/galery2.png";
import wed4 from "../assets/images/wedding4.jpg";
import wed5 from "../assets/images/galery2.png";
import wed6 from "../assets/images/wedding6.jpg";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";

const Wedding = () => {
  const photos = [
    { id: 1, src: wed1, alt: "Photo 1", width: 1000, height: 1400 },
    { id: 2, src: wed2, alt: "Photo 2" },
    { id: 3, src: wed3, alt: "Photo 3" },
    { id: 4, src: wed4, alt: "Photo 4" },
    { id: 5, src: wed5, alt: "Photo 5" },
  ];
  return (
    <>
      <Navigation />
      <Caresoul />
      {/* <CardGroup className="mt-3 m-3 mb-0 gap-1" >
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

            </CardGroup> */}

      <Container>
        <h1>Photo Gallery</h1>
        <Row>
          {photos.map((photo) => (
            <Col key={photo.id} xs={6} md={3} lg={3}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="img-fluid"
                width={photo.width}
                height={photo.height}
                style={{ marginBottom: "20px" }}
              />
            </Col>
          ))}
        </Row>
        <Row>
          {photos.map((photo) => (
            <Col key={photo.id} xs={6} md={3} lg={3}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="img-fluid"
                style={{ marginBottom: "20px" }}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Wedding;
