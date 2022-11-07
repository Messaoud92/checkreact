import React from 'react';
import im from "../logo.svg"

import "./Nvbarrcss.css"

function Nvbarr() {
return (
<>
<div className ="backnav"></div>
<nav className="navigation">
<a href="#top"><img className="logo" src={im} alt=""/></a>

<ul className="menu">
    <li><a href="#top">PRODUCT</a></li>
    <li><a href="#top">FEATURES</a></li>
    <li><a href="#top">PRICING</a></li>   
</ul>
<div ><a className="login" href="#top">LOGIN</a></div>



</nav>

</>
);
}

export default Nvbarr ;
