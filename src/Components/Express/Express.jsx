import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Img from '../../assets/Img.js';
import { motion } from 'framer-motion';
import Component from '../../constants/Component.js';
import { langContext } from '../../Context/ChangeLang.js';
import './Express.scss'
function Express() {
  let { isEng } = useContext(langContext);

  return (
    <>
      <div className="app__Express" id='express'>
        <Container dir={!isEng ? 'ltr' : 'rtl'}>
          <Row className='vh-100 d-flex justify-content-center align-items-center  '>
            <Col xl={6} lg={6} md={12} sm={12} className='d-flex   d-flex justify-content-center align-items-center  '>
              {
                isEng ?
                  <motion.div
                    whileInView={{ opacity: [0, 1] }} transition={{ duration: 1, delayChildren: 0.4 }} className="app__header-img d-flex d-flex justify-content-end  align-items-center " >
                    <motion.img
                      src={Img.phone}
                      whileInView={{ x: -300 }} transition={{ duration: 2 }}
                    />
                    <motion.img
                      whileInView={{ scale: [0, 1], x: 100 }}
                      transition={{ duration: 3, ease: 'easeInOut' }}
                      src={Img.bgPhoto}
                      className='overlay__circle' />
                  </motion.div> : 
                  <motion.div
                    whileInView={{ opacity: [0, 1] }} transition={{ duration: 1, delayChildren: 0.4 }} className="app__header-img d-flex d-flex justify-content-end  align-items-center " >
                    <motion.img
                      src={Img.phone}
                      whileInView={{ x: 300 }} transition={{ duration: 2 }}
                    />
                    <motion.img
                      whileInView={{ scale: [0, 1], x: -100 }}
                      transition={{ duration: 3, ease: 'easeInOut' }}
                      src={Img.bgPhoto}
                      className='overlay__circle' />
                  </motion.div>
              }

            </Col>
            <Col xl={6} lg={6} md={12} sm={12} className='app__Express-content    ' dir={isEng ? 'ltr' : 'rtl'}>

              <Component.H3 dir={!isEng && 'start'} titleAr=' حمل التطبيق ' titleEn='Download the app' />

              <div dir={isEng ? 'ltr' : 'rtl'}>
                <p style={{ textAlign: 'start' }} >
                  {isEng ? 'Download the appropriate application for the nature of your business....' : 'حمل التطبيق المناسب لطبيعة عملك....'}
                </p>
                <h1 style={{ textAlign: 'start' }}>Zari Express (Client App)</h1>
              </div>

              <div className="app__Express-content d-flex " dir={isEng ? 'ltr' : 'rtl'} >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}                >
                  <img src={Img.google} alt="" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}                >
                  <img src={Img.apple} alt="" />
                </motion.div>
              </div>

              <h1 style={{ textAlign: 'start' }}>Zari Express (Manager App)</h1>

              <div className="app__Express-content d-flex " dir={isEng ? 'ltr' : 'rtl'}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}                >
                  <img src={Img.google} alt="" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}                >
                  <img src={Img.apple} alt="" />
                </motion.div>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Express
