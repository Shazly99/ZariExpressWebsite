import React, { useContext, useEffect } from 'react'
import './Navbar.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { langContext } from './../../Context/ChangeLang';
import Img from '../../assets/Img';
function NavBar() {
    let { isEng, changeLang } = useContext(langContext);

    useEffect(() => {

    }, [isEng]);
    return (
        <>
            <Navbar fixed='top' collapseOnSelect expand="lg" bg="black" variant="dark" dir={isEng ? 'ltr' : 'rtl'}>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src={Img.logoExpress} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className=''>
                        <Nav className={`navbar-nav ${isEng ? 'me-auto' : 'ms-auto'} mb-2 mb-lg-0    py-3 py-lg-0 fw-bold`}  >
                            {
                            [
                                { nav: 'home', en: 'Home', ar: 'الصفحه الرئيسيه' },
                                { nav: 'about', en: 'About Express', ar: 'عن إكسبرس' },
                                { nav: 'advantages', en: 'Our advantages', ar: 'مميزاتنا' },
                                { nav: 'Whyexpress', en: 'Why Express', ar: 'لماذا إكسبرس' },
                                { nav: 'express', en: ' Express', ar: 'إكسبرس' },
                                { nav: 'blog', en: 'Blog', ar: 'المدونات' },
                                { nav: 'contact', en: 'Contact us', ar: 'تواصل معانا' },
                            ]
                                    .map((nav, index) => {
                                        return (
                                            <Nav.Link key={index} href={`#${nav.nav}`} className={`${nav.en == 'Home' ? 'active' : ''}  ${isEng ? 'me-auto ' : 'text-right ms-auto '} text-center`}>{!isEng ? nav.ar : nav.en}</Nav.Link>
                                        )
                                    })
                            }
                        </Nav>
                        {/* ,'مميزاتنا','لماذا إكسبرس','إكسبرس','المدونات',' معنا' */}
                        <Nav>
                            <div className="language py-2" onClick={() => { changeLang(); }}>
                                {isEng ? <img src={Img.langAr} alt="logoAr" /> : <img src={Img.langEn} alt="logoEn" />}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar