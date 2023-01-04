import React, { useContext } from 'react'
import { langContext } from '../../Context/ChangeLang';
import './Contact.scss'

function InputGroup({ name, type, labelnameAr,labelnameEn, placeholder }) {
    let { isEng } = useContext(langContext);

    return (
        <>
            <div className={` app__Landingpage-${name} w-100`} >
                <label  htmlFor="" className=' w-100  d-flex justify-content-end '>{!isEng?labelnameAr:labelnameEn}</label>
                <input dir={isEng ? 'ltr' : 'rtl'} type={type} placeholder={placeholder} />
            </div>
        </>
    )
}

export default InputGroup
