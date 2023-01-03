import React, { useContext } from 'react'
import { langContext } from '../../../Context/ChangeLang';

function Paragraph({ paraAr, paraEn, textCenter, size, txtstart, txtend, color }) {
    let { isEng } = useContext(langContext);

    return (
        <div className='Paragraph ' dir={isEng ? 'ltr' : 'rtl'}>
            <p className={`mb-2 ${textCenter} ${color} ${size} ${isEng ? `${txtstart}` : `${txtend} `}`} >{!isEng ? `${paraAr}` : `${paraEn} `} </p>
        </div>
    )
}

export default Paragraph

 