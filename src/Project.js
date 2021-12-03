import './project.css';
import color from './images/project/color.jpg';
import calc from './images/project/calc.jpg';
import ecommerce from './images/project/ecommerce.jpg';
import game from './images/project/game.png';
import stack from './images/project/stack.png';
import { Card } from './card';
export function Project() {
 

  const data=[{image:ecommerce,heading:"Ecommerce",description:"This is a web page where you can buy things or add to card. ",git:"https://github.com/SRIRAM1102/ecommerce-frontend",site:"https://ecommercesite-sriram.netlify.app"},


  {image:stack,heading:"Devoloper society",description:"This is a web page where you can ask question to a community or answer to their questions. ",git:"https://github.com/SRIRAM1102/stackflow-frontend",site:"https://developersociety-sriram.netlify.app"},


  {image:color,heading:"Color Combinator",description:"This  is a web page which will assist you in desiding color of dress from closet as well as randamized sugesstions.",git:"https://github.com/SRIRAM1102/colorcombinator-front",site:"https://sriram-colorcombinator.netlify.app"},


  {image:game,heading:"Tic-Tac-Toe",description:"This is a interactive game which we all have played in school. ",git:"https://github.com/SRIRAM1102/tic-tac-toe",site:"https://tic-tac-toe-sriram.netlify.app"},


  {image:calc,heading:"Calculator",description:"This is a web page where you can perform mathematical operations. ",git:"https://github.com/SRIRAM1102",site:"https://calculator-sriram.netlify.app"},
  ]
  return (
    <div id="projects">
      <h2>Project</h2>
    
       <div className="cardarrangement"> 
     
       {data.map((el,index)=><Card el={el}/>)}
       </div>
     
     
     
    </div>
  );
  
}
{/* <div className="projectcard">
<img src={el.image} className="projectimg"/>
<h6 className="projectheading">{el.heading}</h6>
<p>{el.description}</p>
<p><b>Tech:</b>{el.techonologies}</p>
<button className="projectbtn1">View</button>
<button className="projectbtn2">View Git</button>
    </div> */}