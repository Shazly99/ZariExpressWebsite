import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Img from '../../assets/Img';
import Component from '../../constants/Component'
import { langContext } from '../../Context/ChangeLang';
import { motion } from 'framer-motion';

function Contact() {
  let { isEng } = useContext(langContext);

  return (
    <>
      <div className="app__contact" id='contact'>
        <div>
          <Row dir={!isEng ? 'ltr' : 'rtl'} >

            <Col xl={6} lg={6} md={6} sm={12}  >
              <Component.Form />
            </Col>

            <Col dir={isEng ? 'ltr' : 'rtl'} xl={6} lg={6} md={6} sm={12} >
              <Component.H3 dir={!isEng && 'start'} titleAr='تواصل عنا' titleEn='Contact US' />
              <div className="app__contact-p d-flex mt-3 flex-column">

                <Component.Paragraph
                  paraAr={'سوق لمنتجك المصري في السوق السعودي '}
                  paraEn='Market for your Egyptian product in the Saudi market'
                />

                <Component.Paragraph
                  paraAr='
                لو عندك إستفسار تقدر معنا عن طريق إرسال رسالة بإستفسارك'
                  paraEn='
                If you have an inquiry, you can contact us by sending a message with your inquiry'
                />
                <motion.div
                  animate={{ y: 0 }}
                  whileInView={{ y: 0, opacity: [0, 1], scale: [0, 1] }}
                  transition={{ type: 'tween', duration: 2 }}
                  initial={{ y: 200 }}
                >
                  <img src={Img.contactUs} alt=""  className='w-100' />
                </motion.div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Contact
