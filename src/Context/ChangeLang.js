import React from "react";
import { createContext, useState } from "react";


export let langContext = createContext(true);

 function ChangeLang(props) {
 
    const [isEng, setIsEng] = useState(false);
    const changeLang = () => {
        console.log('shaz');
        setIsEng(!isEng);
    }


    return <langContext.Provider value={{ isEng, changeLang }}>
        {props.children}
    </langContext.Provider>
}

export default ChangeLang