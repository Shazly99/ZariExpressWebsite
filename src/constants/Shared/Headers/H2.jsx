import React, { useContext } from 'react'
import { langContext } from '../../../Context/ChangeLang';
import { motion } from 'framer-motion';

function H2({titleAr,titleEn ,textCenter}) {
  let { isEng } = useContext(langContext);

  return ( 
    <div className='sub__header'>
      <h2 className={`${textCenter}`} >{!isEng ?  `${titleAr}` : `${titleEn}`} </h2>
    </div> 
  )
}

export default H2
