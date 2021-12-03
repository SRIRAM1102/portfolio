import "./card.css";
import git from './images/contact/github.png';
import view from './images/contact/rocket.png';


export function Card({el}){


    return(
      <div className="wrapper">
      <div className = "containers-card">
      <div className = "cardz">
        <div className = "imagez">
         <img src={el.image} className="projectimg"/>
        </div>
        <div className = "contentz">
        <h6 >{el.heading}</h6>
        <p>{el.description}</p>
        <div className="card-btns">
        
          <a href={el.site} target="_blank">  <img src={view} alt="view" /></a>
          <a href={el.git} target="_blank">  <img src={git} alt="github" /></a>

 
</div>
        </div>
      </div>    
    </div>
    </div>
   );
}



