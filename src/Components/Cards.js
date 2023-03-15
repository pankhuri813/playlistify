import React from 'react';
import "./Navbar.css"
import dancefloor from '../images/dancefloor.jpg'
import { Link } from 'react-router-dom'



function Cards() {
  return (
    <Link to="/categorypage">
<div className="image-container">
 <img className='image' src={dancefloor} alt="dance"/>
  <div className="text"><h1>DANCE</h1></div>
</div>
</Link>
  )
}

export default Cards


// const Card = (props) => {
//   return (
//     <>
//     <div className='cards-container'>
//     <div className="card">
//           <img src={props.img} alt={props.alt} />
//           <h2>{props.title}</h2>
//           <p>{props.description}</p>
//           <Link to="/categorypage"> <button id='dance-button'>Click here </button></Link>
//       </div><div className="card">
//               <img src={props.img} alt={props.alt} />
//               <h2>{props.title}</h2>
//               <p>{props.description}</p>
//           </div><div className="card">
//               <img src={props.img} alt={props.alt} />
//               <h2>{props.title}</h2>
//               <p>{props.description}</p>
//           </div>
//           </div>
           
//           </>
//   );
// }

// export default Card;





