import './About.css';
import calendar from './images/about/calendar.png';
import mail from './images/contact/gmail.png';
import phone from './images/about/phone.png';
import location from './images/about/location.png';
import language from './images/about/language.png';

export function About() {
  return (
    <div id="about">
      <div className="abtcontent">
      <h2>About</h2>
      <p>I am Sriram, Software devoloper with expertise in versatile technologies involving full stack devolopment .I enjoy problem solving and fixing things and an urge 
        to devolope something new on my own.I am in the learning curve and always excited to learn new 
        things; the more, the better  to expose myself in competitive environment which in turn help me to achieve 
        personal and organisation goals.
      </p>
      </div>
     <div>
       <h2>Basic Information</h2>
       <br/>
       <ul>
        <div className="abtinfos"><img src={calendar} alt="calendar" className="abtlogo"/> <li> 11FEb,2000</li></div>
        <div className="abtinfos"><img src={mail} alt="gmail" className="abtlogo"/><li> ssram011@gmail.com</li></div>
      <div className="abtinfos"><img src={phone} alt="phone" className="abtlogo"/>  <li> 9952437202</li></div>
       <div className="abtinfos"><img src={location} alt="location" className="abtlogo"/>  <li> Madurai,India</li></div>
        <div className="abtinfos"><img src={language} alt="language" className="abtlogo"/> <li> Tamil,English,French</li></div>
       </ul>
     </div>
     

    </div>
  );
}
