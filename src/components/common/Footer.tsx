import React from "react";
import { Link,Outlet } from "react-router-dom";


function Footer():JSX.Element{

    return(
        
        <div id='footer'>
            <div className='subscribe'>
                <h2>ESHOP NEWSLETTER</h2>
                <form action="" method="post" style={{width:'100%'}}>
                
                <input type="text" name="email" style={{width:'100%'}} placeholder="Enter your Email" />
                <input type="submit" style={{width:'100%'}} value="Subscribe" />
                </form>
               

            </div>
            <div className="findUs">
                <h2>FIND US</h2>
                <h4>Address</h4>
                <p>No 3 Patience street, Ohumere Quarters, Agbor-Obi, Agbor, Delta State.</p>
                <hr />
                <h4>Email</h4>
                <a href="mailto:ojogunemmu@gmail.com" style={{color:'var(--primary)',textDecoration:'none'}}>ojogunemmy@gmail.com</a>
                <hr />
                <h4>Phone</h4>
                <a href="tel:+2348063461664" style={{color:'var(--primary)',textDecoration:'none'}}>+234 (0) 8063461664</a>
               
            </div>

            
            <ul className="quicklinks">
                <h2>CATEGORY</h2>
                <Link to="/kkk" className="rmd">Groceries</Link>
                <hr />
               
            </ul>

            
            <div className='members'>
                <h2>ABOUT US</h2>
               
            </div>

           
            
          <Outlet/>
        </div>
    )

}

export default Footer