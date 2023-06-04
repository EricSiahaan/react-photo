
import React, { useState, useRef } from "react";
import Caresoul from "../Components/Caresoul";
import Navigation from "../Components/Navbar";
import wed1 from "../assets/images/EB8B6FD1-251A-4125-9C96-23098DD89D9E-992-000000C01FE69DC0.jpg"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from "../Components/Footer";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBRadio,
    MDBTextArea
}
    from 'mdb-react-ui-kit';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [done, setDone] = useState(false);
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();



        emailjs.sendForm(
            'service_9gkrxjr',
            'template_rgnz3cf',
            formRef.current,
            'axgnQtrDy9JWY2FYA'
        )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <>
            <Navigation />
            return (
            <form onSubmit={sendEmail} ref={formRef}>

                <MDBContainer fluid >

                    <MDBRow className='d-flex justify-content-center align-items-center'>

                        <MDBCol lg='10'>
                            <MDBCard className='my-5 rounded-3' style={{ maxWidth: '600px' }}>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top' alt="Sample photo" />
                                <MDBCardBody className='px-5'>
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Contact Me</h3>
                                    <MDBInput wrapperClass='mb-4' placeholder='Nama Kamu' name="user_name" id='form1' type='text' />
                                    <MDBRow>
                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' placeholder='Email Kamu' name="user_email" id='form3' type='text' />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' name="phone" placeholder='Nomor Telephone Kamu' id='form3' type='text' />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md='6'>
                                            <MDBTextArea wrapperClass='mb-4' placeholder='Cerita Tentang' name="message" id='form3' type='text' />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='datepicker mb-4' placeholder='Tanggal Acara' id='form2' type='date' />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBBtn color='success' className='mb-4' size='lg'>Submit</MDBBtn>
                                </MDBCardBody>
                                {done ? <p>Thank you for contacting :))</p> : null}
                            </MDBCard>
                            <br />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer >
            </form>
            <Footer />
        </>
    );
};

export default Contact;