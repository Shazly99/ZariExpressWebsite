import React, { useContext } from 'react'
import { Form } from 'react-bootstrap';
import Component from '../../constants/Component';
import { langContext } from '../../Context/ChangeLang';
import './Contact.scss'
function FormContact() {

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e);
    }
    let { isEng } = useContext(langContext);

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)} dir={!isEng ? 'ltr' : 'rtl'} >
                <Component.InputGroup name='FromName' type='text' labelnameAr='الأسم بالكامل'  labelnameEn='Username' />
                <Component.InputGroup name='FromName' type='email' labelnameAr=' الإيميل'  labelnameEn={'Email'} />
                <Component.InputGroup name='FromName' type='number' labelnameAr='رقم التليفون '   labelnameEn='Phone'/>
                <Component.InputGroup name='FromName' type='text' labelnameAr='النشاط التجاري '  labelnameEn='commercial activities' /> 
                <div className="app__Landingpage-FromName ">
                    <label className='w-100  d-flex justify-content-end ' htmlFor="">  {!isEng?'رسالتك':'Your Mesaage'}</label>
                    <textarea dir={isEng ? 'ltr' : 'rtl'} name="" id="" cols="30" rows="10"></textarea>
                </div>
                
                <button   className='app__Landingpage-submit  ' type='submit'>{!isEng?'أرسل رسالتك':'Send message'}</button>
            </form>
        </>
    )
}

export default FormContact