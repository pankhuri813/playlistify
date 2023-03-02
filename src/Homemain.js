import React from 'react'
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel'
import About from './Components/About'
import Cards from './Components/Cards'
import brr from './images/brr.PNG'

// import Homepage from './Homepage.js';

function Homemain() {
  return (
    <div>


<Navbar> </Navbar>

<Carousel> </Carousel>

<About> </About>

<Cards img={brr}  alt="Example image"
    title="Example title"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    "/>
    {/* <Homepage/> */}
    </div>
  )
}

export default Homemain