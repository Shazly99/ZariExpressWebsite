import React, { useContext } from 'react' 
import { langContext } from '../../../Context/ChangeLang';
import { motion } from 'framer-motion';

function H3({dir,titleAr,titleEn}) {
  let { isEng } = useContext(langContext);

    return (
        <motion.div
        animate={{ y: 0 }}
        whileInView={{ y: [-100, 2], opacity: [0, 1] }}
        transition={{ type: 'tween', duration: 1 }}
        initial={{ y: -300 }}
      >

        <div className={`sub__header3 d-flex justify-content-center align-items-${dir} flex-column`}>
            <h2>{!isEng ? `${titleAr}` : `${titleEn}`} </h2>
            <div className="overlay"></div>
        </div>

      </motion.div>
    )
}

export default H3