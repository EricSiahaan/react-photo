import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <div>
                    <h2 style={{ color: 'black' }}>ERIC HANSDEKA</h2>
                    <p style={{ color: 'black' }}>Fotografer yang berbasis di Karawang dan Jabodetabek, saya mengambil
                        gambar yang alami, hangat, dan penuh warna.
                        Saya mengabadikan setiap momen pernikahan Anda baik yang diselenggarakan di Karawang,
                        Jabodetabek, di Indonesia, atau bahkan di luar negeri.
                        Saya secara rutin melakukan berbagai gaya pengambilan gambar seperti Gaya Hidup (Wisuda,
                        Pembaptisan, Sidi) Sesi Cinta (pertunangan, Pernikahan) untuk mengabadikan setiap momen penting
                        dalam hidup Anda selamanya.</p>
                </div>
                <div className="social-media" >
                    <a style={{ color: 'black' }} href="https://www.facebook.com/mycompany"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a style={{ color: 'black' }} href="https://www.twitter.com/mycompany"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a style={{ color: 'black' }} href="https://www.instagram.com/mycompany"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <div>
                    <h3 style={{ color: 'black' }}>Contact me</h3>
                    <p style={{ color: 'black' }}>Untuk wilayah Karawang, Jabodetabek, Purwakarta, Bandung, atau seluruh
                        Indonesia.</p>

                    <div className="subs">
                        <i className="fas fa-envelope"></i>
                        <input type="email" id="email" placeholder="Email Address" />
                        <button type="submit">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <p>&copy; Copyright Eric Hansdeka . 2023</p>
        </footer>
    );
}

export default Footer;