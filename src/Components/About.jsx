import React from 'react'
import "../Components/about.css"
import pic from "../images/coffeee.jpg"
import pic2 from '../images/beans.jpg'

import pic3 from '../images/coffee1.png'
export default function About() {
  return (
   <section id='about'>
    <div className='aboutdiv'>
    <div className='about-div'>
       <div className='top'>
       <h1> It's all abt Nightmare's cafe</h1>
        <i>"Coffee lovers around the world who reach for their favorite morning brew probably aren’t thinking about its health benefits or risks. And yet this beverage has been subject to a long history of debate.".</i>
       </div>
       <div className='top1'>
        <img src={pic} alt=''/>
       <h1>Awesome Aroma</h1>
        <i>"ASed ut perspiciatis unde omnis iste natus error sit oluptatem accusantium doloremque ladase.".</i>
       </div>
       <div className='top2'>
       <img src={pic2} alt=''/>
       <h1>Bean Varieties
</h1>
        <i>"Sed ut perspiciatis unde omnis iste natus error sit oluptatem accusantium doloremque ladase."</i>
       </div>
    </div>
    { <div className='bottom'>
    <img src={pic3} alt=""/>
    <div>
    <h1>Night Time</h1>
    <h2>Cold Winter&Hot coffee</h2>
    <p>Gallery offers a unique coffee house environment unlike any other in Macon. We are not only a place to drop in and get your morning cup of coffee (although you are more than welcome to do that), we are a place where you can sit down and enjoy that tailor-made cup of coffee. If you need to work, we have a seating area created specifically for you</p>
   
    </div>
    </div>  }
   </div>
   </section>
  )
}
