import React, { useState,useContext} from "react"
import {Link,Outlet} from 'react-router-dom'
import Navigation, { AccountDropdown, SubLinksDown } from "../Navigation"
import { GiShoppingCart } from "react-icons/gi"
import {MdAccountCircle} from "react-icons/md"
import {IoIosMenu } from "react-icons/io"
import { IoCloseOutline} from "react-icons/io5"
import { AuthenticationStatus, CartListNumber, SideNavBar } from "../App"










function Header(props:any){

    const {side,setSide} = useContext(SideNavBar)
    const {cart,setCart} = useContext(CartListNumber)
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthenticationStatus)
    var [close,setClose] = useState(false)

    
    function clickMenu(event:React.MouseEvent<SVGElement,MouseEvent>){
        
       
        if(close === false){
           
            setClose(true)
            setSide(true)
           

           
        }else{
            
          
            setClose(false)
            setSide(false)
           
        }

    }

  
   

   


    
   
    return(
        <div className="navbar">
        <div id="logo"><Navigation LinkName="EShop" to="/EShop"/></div>
       
        <div className="group">

            <Navigation LinkName="Home" to="/EShop"/>

            <input type="search" name="search"  style={{width:'70%',backgroundColor:"var(grey)",backdropFilter:" blur(1px)",height:'70%'}}/>
            
            <SubLinksDown name="Category" type="Category"/>
            
        </div>

        <div className="group1">
        <div>
        <Navigation LinkName={<GiShoppingCart size={32}/>} to="/Cart"/>
        {
            cart.length !== 0 ? <div style={{width:'15px',height:'15px',fontSize:'8px',borderRadius:'50%',color:'var(--light)',position:'absolute',top:'14px',right:'225px',backgroundColor:'var(--info)'}}>{cart.length}</div>:<></>

        }
        </div>

          {
             
            isLoggedIn===true?  <AccountDropdown  run={<MdAccountCircle size={40} color="var(--dark)" style={{width:'100%',borderRadius:'50%'}} />}/>:<Link to={"/Signin"} style={{display:'flex',outline:'1px solid var(--dark)',justifyContent:'center',alignItems:'center',height:'35px',padding:"0px 20px 0px 20px",textDecoration:'none',whiteSpace:'nowrap',borderRadius:'5px',backgroundColor:'var(--dark)',fontWeight:'800',color:'var(--light)',marginTop:'0px'}} > Sign in</Link>

          }
          <Outlet/>
        

         

        </div>

        <div id='sm'> 
        <div>
        
        <Navigation LinkName={<GiShoppingCart size={24}/>} to="/Cart"/>
        {
            cart.length !== 0 ? <div style={{width:'15px',height:'15px',fontSize:'8px',borderRadius:'50%',color:'var(--light)',position:'absolute',top:'15px',right:'65px',backgroundColor:'var(--info)'}}>{cart.length}</div>:<></>
        }
        


        </div>
 
        
        {
            side === false?<IoIosMenu size={32} id='menu' onClick={e=>clickMenu(e)} color="var(--dark)"/>:<IoCloseOutline size={32} id='menu' onClick={e=>clickMenu(e)} color="var(--dark)"/>

        }
        </div>

        

       
       
        
        </div>
        
    )

}






export default Header




