import "./scroll.css";
import { useState } from 'react';
import { useEffect } from "react";
import scroll from "./images/scroll.png";

export function Scroll({handleScrollUp,scrollPosition, setSrollPosition}){
 
    const [showGoTop, setshowGoTop] = useState("goTopHidden");
    const handleVisibleButton = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    
        if (scrollPosition > 150) {
          return setshowGoTop("goTop");
        } else if (scrollPosition < 150) {
          return setshowGoTop("goTopHidden");
        }
      };
      useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton);
      });
    return(
        <div>
       <img src={scroll} alt="scrollbtn" className={showGoTop}  onClick={handleScrollUp}/>
     
     
      </div>
    );
}

// className={showGoTop}