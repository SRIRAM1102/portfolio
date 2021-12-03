import './Footer.css';
import instagram from './images/contact/instagram.png';
import git from './images/contact/github.png';
import gmail from './images/contact/gmail.png';
export function Footer(){
    return(
     <div id="footer">
       <a href="mailto:ssram011@gmail.com" target="_blank"><img src={gmail} alt="gmail" className="logo"/></a>
       <a href="https://www.instagram.com/200_machine_/?utm_medium=copy_link" target="_blank"><img src={instagram} alt="instagram" className="logo"/></a> 
       <a href="https://github.com/SRIRAM1102" target="_blank">  <img src={git} alt="github" className="logo"/></a>   
     </div>
    );
}

