import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap';
import Component from '../../constants/Component';
import { langContext } from '../../Context/ChangeLang';
import './AdvExpress.scss';
import dataAdvExpress from './data';
import { motion } from 'framer-motion';

function AdvExpress() {
  let { isEng } = useContext(langContext);
  return (
    <>
      <div className="app__AdvExpress" id='advantages'>
        <Component.H1 titleAr={'مميزاتنا'} titleEn={'Our advantages'} />
        <Row className='app__AdvExpress-content' dir={isEng ? 'ltr' : 'rtl'} >

          {
            dataAdvExpress.map((item, index) => (

              <Col xl={4} lg={4} md={6} sm={12} key={index}   >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  // animate={{ opacity: 1, scale: 1 }}
                  whileInView={{
                    opacity: 1, scale: 1,
                    delay: 0.25*index,

                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25*index,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                > 
                  <div className="app__AdvExpress-content-card mt-3 d-flex justify-content-center align-items-center flex-column  ">
                    <img src={item.img} alt="" />
                    <Component.H2 titleAr={item.headerAr} titleEn={item.headerEn} textCenter='text-center mt-11' />
                    <Component.Paragraph paraAr={item.docAr} paraEn={item.docEn} textCenter='text-center mt-8' />
                  </div>
                </motion.div>
              </Col>
            ))
          }
        </Row>
      </div>
    </>
  )
}

export default AdvExpress
