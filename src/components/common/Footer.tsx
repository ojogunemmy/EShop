import React from "react";
import { Link,Outlet } from "react-router-dom";


function Footer():JSX.Element{

    return(
        
        <div id='footer'>
            <div className='subscribe'>
                <h2>ESHOP NEWSLETTER</h2>
                <form action="" method="post" style={{width:'100%'}}>
                
                <input type="text" name="email" style={{width:'100%'}} placeholder="Enter your Email" />
                <input type="submit" style={{width:'100%',borderRadius:'0px'}} value="Subscribe" />
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
            
            
                <Link to='' className="rmd" >Electronics</Link>
                <hr />
                <Link to='' className="rmd" >Fashion and Apparel</Link>
                <hr />
                <Link to='' className="rmd" >Home and Furniture</Link>
                <hr />
                <Link to='' className="rmd" >Food and Groceries</Link>
                <hr />
                <Link to='' className="rmd" >Jewelry and Watches</Link>
                <hr />
                <Link to='' className="rmd" >Pets and Pet Supplies</Link>
                <hr />
                <Link to='' className="rmd" >Office and Stationery</Link>
                <hr />
                <Link to='' className="rmd" >Art and Crafts</Link>
                <hr />
                <Link to='' className="rmd" >Baby and Maternity</Link>
                <hr />
                <Link to='' className="rmd" > Gifts and Occasions</Link>
               
               
            </ul>

            
            <div className='quicklinks'>
                <h2>ABOUT US</h2>
                <Link to="/About" className="rmd">About EShop</Link>
                <hr />
                <Link to="/About" className="rmd">Terms and Conditions</Link>
                <hr />
                <Link to="/About" className="rmd">Privacy Policy</Link>
                <hr />
                <Link to="/About" className="rmd">Shipping and Delivery</Link>
                <hr />
                <Link to="/About" className="rmd">Return Policy</Link>
                <hr />
                <Link to="/About" className="rmd">Payment and Billing</Link>
               


               
            </div>

           
            
          <Outlet/>
        </div>
    )

}

export default Footer