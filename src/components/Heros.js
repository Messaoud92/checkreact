import React from 'react';
import "./heros.css"
import im1 from "../img/illustration-devices.svg"

function Heros() {
  return (
   <section className='hero'>
    <div className='left-section'>
        <div className='line-one'> 
            <span>NEW</span><p>MONOGRAPHE DASHBOARD </p>
            </div>

        <div className='line-two'>
            <h1>POWER FULL INSIGHTSIN <br/>TO YOUR TEAM </h1>
            <p>project planing and time tracking for agiles teams</p></div>

        <div className='line-for'>
            <button className='btn-demo' >SCHEDULE A DEMO</button>
            <span> TO SEE A PREVIEW</span>
        </div>
        </div>
    
            <div class="right-section">
            <img src={im1} alt="image"/>
           
            </div>
</section>
  );
}

export default Heros;