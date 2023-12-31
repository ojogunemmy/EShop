import React,{useContext} from "react";
import {Link,Outlet} from 'react-router-dom'
import {RiArrowDropDownLine} from 'react-icons/ri'
import Dropdown from "./common/DropdownView";
import { AuthenticationStatus, SideNavBar } from "./App";



function Navigation(props:any){
    
    const {setIsLoggedIn} = useContext(AuthenticationStatus)
    return(
        <div >

                
                <Link to={props.to} className={props.choice} style={{display:'flex',justifyContent:'center',alignItems:'center',textDecoration:'none',height:'100%',letterSpacing:'1px',fontSize:'calc(var(--fontsize)*1.5)',fontWeight:'800',width:'100%',color:'var(--dark)',marginTop:'0px'}} > {props.LinkName}</Link>
                <Outlet/>
               
        </div>
    )


}

function SideNavigation(props:any){
  
  const {setSide} = useContext(SideNavBar)
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthenticationStatus)

  function handleClick(e:any){
    setSide(false)

    if(isLoggedIn.status === true){
      setIsLoggedIn({name:'',id:'',status:false})
    }


  }

  return(
      <div>

              {
                 props.type==="Route"?<Link to={props.to} onClick={e=>setSide(false)} className={props.choice} style={{display:'flex',justifyContent:'space-between',alignItems:'center',letterSpacing:'1px',textDecoration:'none',height:'100%',fontSize:'calc(var(--fontsize)*1.5)',fontWeight:'800',width:'100%',color:'var(--light)',marginTop:'0px'}} >{props.icon} {props.LinkName}</Link>:<div style={{display:'flex',justifyContent:'center',letterSpacing:'1px',cursor:'pointer',alignItems:'center',textDecoration:'none',height:'100%',fontSize:'calc(var(--fontsize)*1.5)',fontWeight:'800',width:'100%',color:'var(--light)',marginTop:'0px'}}  onClick={e=>handleClick(e)}>{props.icon}{props.LinkName}</div>

              }
              <Outlet/>
             
      </div>
  )


}






function SubLinksDown(props:any){
    
    return (
    <>
             <div className={'subdown'} >
             <div style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'calc(var(--fontsize)*1.5)',letterSpacing:'1px',height:'100%',fontWeight:'800'}}> <span>{props.name}</span>{props.type!==props.name?'':<RiArrowDropDownLine size={32}/>} </div>
              <div className={'subdown-content'}>

               <Dropdown style={props.type === props.name?{display:'flex',flexDirection:'row',justifyContent:'space-evenly',flexWrap:'wrap',zIndex:'10',alignItems:'flex-start',padding:'var(--padding)',height:'100%',width:'100%'}:{display:'none'}}/>


              </div>
           </div>
    </>
    )
}

function AccountDropdown(props:any){

    const {setIsLoggedIn} = useContext(AuthenticationStatus)

    const style = {textDecoration:'none',color:'var(--dark)',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}
    
    return (
    <>
             <div className={'ac'} >

                <span style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'calc(var(--fontsize)*1.5)',height:'100%',fontWeight:'800'}}>
                {
                props.run
              }
                </span>
              
              <div className={'ac-content'}>
 



              <div  style={style}><Link to={'/Account'} style={style}>Account</Link></div>
              <div  style={style}><Link to={'/Settings'} style={style}>Settings</Link></div>
              <div onClick={e=>setIsLoggedIn({name:'',id:'',status:false})} style={style}><div style={style}>Logout</div></div>


               


              </div>
           </div>
    </>
    )
}



export default Navigation
export {SubLinksDown,AccountDropdown,SideNavigation}

