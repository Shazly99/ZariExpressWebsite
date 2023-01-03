import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import Img from '../../assets/Img'
import Component from '../../constants/Component'
import { langContext } from '../../Context/ChangeLang';
import { motion } from 'framer-motion';

function WhyExpress() {

  let { isEng } = useContext(langContext);

  return (
    <>
      <div className="app__WhyExpress" id='Whyexpress'>
        <Component.H1 titleAr={'لماذا إكسبرس'} titleEn={'Why Express'} />
        <Row className='mt-5 d-flex  ' dir={isEng ? 'ltr' : 'rtl'}>
          <Col xl={4} lg={4} md={6} sm={12} >
            {isEng ?
              <motion.div
                animate={{ x: 200 }}
                whileInView={{ x: 0, opacity: [0, 1] }}
                transition={{ type: 'tween', duration: 1 }}
                initial={{ x: 200 }}
                whileHover={{ scale: 1.1 }}
              >

                <img src={Img.Questions} alt="" className='w-100' />
              </motion.div> :
              <motion.div
                animate={{ x: 200 }}
                whileInView={{ x: 0, opacity: [0, 1] }}
                transition={{ type: 'tween', duration: 1 }}
                initial={{ x: 200 }}
                whileHover={{ scale: 1.1 }}
              >

                <img src={Img.Questions} alt="" className='w-100' />
              </motion.div>}
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} className='mt-3'  >
          <motion.div
                        animate={{ y: 100 * 2 }}
                        whileInView={{ y: 10 * 2, opacity: [0, 1], }}
                        transition={{ type: 'tween', duration: 1, delay: 1 }}
                        initial={{ y: 0 }}
                    >

            <Component.Paragraph
              paraAr={`وضح جهاز التعبئة والاحصاء المركزي عن وصول قيمة الصادرات المصرية خلال شهر يونيو الماضي إلى حوالي 1.066 مليار دولار، بنسبة زيادة 23% عن صادرات عام 2021 ، وتصدرت المملكة العربية السعودية قائمة الدول الأكثر استيرادًا من مصر، حيث وصلت صادراتها حوالي 205.9 مليون دولار خلال عام العام الماضي وبهذا نجد أن السعودية استقبلت 12% من إجمالي صادرات مصر لدول الشرق الأوسط.
                علشان كدا دي فرصتك انك تزيد مبيعاتك و تعرض منتجاتك علي التجار السعوديين علشان السوق السعودي من اكثر الاسواق استيرادا للمنتجات المصرية.`}

              paraEn={`The Central Mobilization and Statistics Authority stated that the value of Egyptian exports during the month of June reached about $1.066 billion, an increase of 23% over exports in 2021, and the Kingdom of Saudi Arabia topped the list of countries that import the most from Egypt, as its exports reached about $205.9 million during the year. Thus, we find that Saudi Arabia received 12% of Egypt's total exports to the countries of the Middle East.
                That's why this is your chance to increase your sales and offer your products to Saudi merchants because the Saudi market is one of the most importing markets for Egyptian products. `}

              size='s-20'
              txtstart='text-start'
              txtend='text-end'
            />
            <Component.Paragraph paraAr={` مستني ايه؟`} paraEn={` What are you waiting for? `} size='s-20' txtstart='text-start' txtend='text-end' />
            <Component.Paragraph
              paraAr={`  اشترك الأن مع زاري اكسبريس و احنا هنعرض منتجاتك المصرية في السوق السعودية`}
              paraEn={`   Subscribe now with Zary Express and we will display your Egyptian products in the Saudi market`}
              size='s-20'
              txtstart='text-start'
              txtend='text-end'
            />
                    </motion.div>

          </Col>


        </Row>
      </div>
    </>
  )
}

export default WhyExpress
