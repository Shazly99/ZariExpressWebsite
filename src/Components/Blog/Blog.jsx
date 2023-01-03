import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap';
import Component from '../../constants/Component'
import BlogData from './data';
import { langContext } from '../../Context/ChangeLang';
import './Blog.scss'
import { motion } from 'framer-motion';
function Blog() {
  console.log(BlogData);
  let { isEng } = useContext(langContext);

  return (
    <>
      <div className="app__Blog  " id='blog'>
        <Component.H1 titleAr={'المدونات'} titleEn={'Blogging'} />
        <Row className='mt-5 '>
          {
            BlogData.map((card, index) => {
              return (
                <Col className='mt-2' key={index} xl={4} lg={4} md={6} sm={12} dir={isEng ? 'ltr' : 'rtl'}>

                  <div className="app__Blog-content bg-light rounded-3 overflow-hidden  p-3">
 
                    <motion.div
                      animate={{ opacity:0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ type: 'tween', duration: 2 }}
                      initial={{ opacity:0}} 
                    >
                      <img src={card.img} className='w-100' />
                    <h4>{!isEng ? card.titleAr : card.titleEn}</h4>
                    <div className="app__Blog-footer ">
                      <div className="app__Blog-footer-right   d-flex gap-1  flex-row align-item-center ">
                        <span>{card.Icon}</span>
                        <h3 style={{ marginTop: '4px' }} >{!isEng ? card.blogAr : card.blogEn}</h3>
                      </div>
                      <div className="app__Blog-footer-left">
                        <span>{!isEng ? card.dataAr : card.dataEn}</span>
                      </div>
                    </div>
                    </motion.div>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </>
  )
}

export default Blog