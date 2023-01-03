import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import Img from '../../assets/Img'
import Component from '../../constants/Component'
import { langContext } from '../../Context/ChangeLang'
import { motion } from 'framer-motion';
function AboutExpress() {
    let { isEng } = useContext(langContext);

    return (

        <div className='app__AboutExpress ' dir={!isEng ? 'ltr' : 'rtl'} id='about' >
            <Component.H1 titleAr='عن إكسبرس' titleEn={'About Express'} />
            <Row className='mt-5 d-flex justify-content-between '>
                <Col xl={4} lg={4} md={6} sm={12}    >
                    {isEng ?
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        >
                            <img src={Img.AboutExpress} alt="" className='w-100' />
                        </motion.div>
                        :
                         
                        <motion.div
                            animate={{ x: -200 }}
                            whileInView={{ x: 0, opacity: [0, 1] }}
                            transition={{ type: 'tween', duration: 1 }}
                            initial={{ x: -200 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <img src={Img.AboutExpress} alt="" className='w-100' />
                        </motion.div>
                    } 
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} dir={isEng ? 'ltr' : 'rtl'} className='d-flex flex-column  g'>
                    <motion.div
                        animate={{ y: 100 }}
                        whileInView={{ y: 10, opacity: [0, 1], }}
                        transition={{ type: 'tween', duration: 1, delay: 0.5 }}
                        initial={{ y: 0 }}
                    >
                        <div className="app__AboutExpress-content ">
                            <Component.H2 titleAr='من نحن' titleEn={'Who are we'} />
                            <Component.Paragraph
                                paraAr=' زاري اكسبريس ، هي أحد مشروعات شركة زاري من خلالنا يمكنك نشر المنتجات الخاصة بك في السعوديه وبدون اي عموله و هيتعملك تسويق دائم طول السنة في مصر و السعودية و دول الخليج بنفس قيمة اشتراكك السنوي'
                                paraEn='Zari Express, it is one of the projects of Zari Company. Through us, you can publish your products in Saudi Arabia without any commission, and it will make you permanent marketing throughout the year in Egypt, Saudi Arabia and the Gulf countries at the same value as your annual subscription.' />
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: 100 * 2 }}
                        whileInView={{ y: 10 * 2, opacity: [0, 1], }}
                        transition={{ type: 'tween', duration: 1, delay: 1 }}
                        initial={{ y: 0 }}
                    >
                        <div className="app__AboutExpress-content mt-3">
                            <Component.H2 titleAr='هدفنا  ' titleEn={'Our goal'} />
                            <Component.Paragraph
                                paraAr={'هو نشر المنتجات و الصناعة المصرية في الأسواق السعودية ومساعدة التجار و أصحاب المصانع و المشاريع الصغيرة في نشر وتصدير منتجاتها للسعودية وأيضا مساعدة الأسواق السعودية على استيراد لوازمهم من الأسواق المصرية. '}
                                paraEn='It is to spread Egyptian products and industry in the Saudi markets and help merchants, factory owners and small projects to spread and export their products to Saudi Arabia and also help the Saudi markets to import their supplies from the Egyptian markets.'
                            />

                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: 100 * 3 }}
                        whileInView={{ y: 10 * 3, opacity: [0, 1], }}
                        transition={{ type: 'tween', duration: 1, delay: 2 }}
                        initial={{ y: 0 }}
                    >
                        <div className="app__AboutExpress-content mt-3">
                            <Component.H2 titleAr='  رؤيتنا  ' titleEn={'Our vision '} />
                            <Component.Paragraph
                                paraAr={' زيادة المبيعات للتجار في مصر وعرض منتجاتهم و نشرها في الأسواق السعودية و مساعدة كلاً من المشروعات الصغيرة وأصحاب الحرف على تسويق وبيع بضائعهم. '}
                                paraEn='Increasing sales to merchants in Egypt, presenting and publishing their products in the Saudi markets, and helping small projects and craftsmen to market and sell their goods.' />
                        </div>
                    </motion.div>
                </Col>


            </Row>
        </div>
    )
}

export default AboutExpress