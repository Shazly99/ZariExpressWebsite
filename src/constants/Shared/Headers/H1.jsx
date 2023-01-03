import React, { useContext } from 'react'
import { langContext } from '../../../Context/ChangeLang';
import { motion } from 'framer-motion';

function H1({titleAr,titleEn ,txtDir}) {
  let { isEng } = useContext(langContext);

  return (
    <motion.div
    animate={{ y: 0 }}
    whileInView={{ y: [-100, 2], opacity: [0, 1] }}
    transition={{ type: 'tween', duration: 1 }}
    initial={{ y: -300 }}
  >


    <div className='header'>
      <h1 className={`${txtDir}`}>  {!isEng ?  `${titleAr}` : `${titleEn}`}  </h1>
    </div>
  </motion.div>
  )
}

export default H1
