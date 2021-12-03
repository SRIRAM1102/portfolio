import "./card.css";
import git from './images/contact/github.png';
import view from './images/contact/rocket.png';
import {useHistory} from "react-router-dom";

export function Card({el}){
let history=useHistory();
function redirectsite(){
  history.push("https://reactjsexample.com/react-component-for-animating-an-elements-children-one-by-one/");
}
function redirectgit(url){

}
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
          <button onClick={()=>redirectsite()}>h</button>
        <img src={view} alt="view" onClick={()=>redirectsite()}/>
 <img src={git} alt="github" onClick={()=>redirectgit(el.git)}/>
</div>
        </div>
      </div>    
    </div>
    </div>
   );
}



