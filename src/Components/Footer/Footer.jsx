import React, { useContext } from 'react'
import { Row, Col } from 'react-bootstrap';
import Img from '../../assets/Img';
import Component from '../../constants/Component';
import { langContext } from '../../Context/ChangeLang';
import './Footer.scss'
function Footer() {
  let { isEng, changeLang } = useContext(langContext);

  return (
    <>
      <div className="app__footer bg-black p-5 mt-5" dir={!isEng ? 'ltr' : 'rtl'}>
        <Row className='d-flex justify-content-between '>

          <Col className='app__footer-sm' xl={3} lg={4} md={6} sm={12} dir={isEng ? 'ltr' : 'rtl'} >
            <span>
              {
                !isEng ? ' روابط هامة' : 'Important links'
              }
            </span>
            <ul>
              <li className='d-flex justify-content-start gap-2'><img src={Img.icon10} alt="" srcset="" /> <span>01151300867</span> </li>
              <li className='d-flex justify-content-start gap-2'><img src={Img.icon6} alt="" srcset="" /> <span>01151300867</span> </li>
              <li className='d-flex justify-content-start gap-2'><img src={Img.icon8} alt="" srcset="" /><a href="https://www.instagram.com/ZARI.Express/" target={'_blank'}>Zari.Express</a></li>
              <li className='d-flex justify-content-start gap-2'><img src={Img.icon7} alt="" srcset="" /><a href="https://www.facebook.com/ZARI.Express/" target={'_blank'}>Zari.Express</a></li>
              <li className='d-flex justify-content-start gap-2'><img src={Img.icon9} alt="" srcset="" /><span>sales@aznetsul.com</span></li>
            </ul>
          </Col>

          <Col xl={2} lg={2} md={6} sm={12} dir={isEng ? 'ltr' : 'rtl'} className={`${!isEng ? 'text-right' : 'text-left'} app__footer-sm `}>
            <span>
              {
                !isEng ? 'تواصل معنا' : 'Connect us'
              }
            </span>
            <ul>
              <li className='d-flex justify-content-start'>  {!isEng ? 'عن إكسبرس' : 'About Express'}</li>
              <li className='d-flex justify-content-start'>{!isEng ? 'مميزاتنا' : 'Our advantages'}</li>
              <li className='d-flex justify-content-start'>{!isEng ? 'لماذا إكسبرس' : 'Why Express'}</li>
              <li className='d-flex justify-content-start'>{!isEng ? 'حمل التطبيق' : 'Download App'}</li>
              <li className='d-flex justify-content-start'>{!isEng ? 'المدونات' : 'Blogging'}</li>
            </ul>
          </Col>


          <Col className='app__footer-sm  app__footer-sm-logo' xl={3} lg={4} md={6} sm={12} dir={isEng ? 'ltr' : 'rtl'}>
            <img src={Img.FooterLogo} width='168' height='104' alt="" srcset="" />
            <div className="mt-3">
              <Component.Paragraph
                paraAr={' نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم '}
                paraEn={'Formal text (meaning that the purpose is the form, not the content) and is used in the industries of printing presses and publishing houses. It was Lorem Ipsum'}
                color='text-light'
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer
