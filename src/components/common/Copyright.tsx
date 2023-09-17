import React ,{useState} from "react";
import { FaFacebook,FaTwitter,FaLinkedin,FaYoutube } from "react-icons/fa";

function Copyright(){

    const data =new Date().getFullYear()
    var [year] = useState(data)
    function Send(e:React.MouseEvent<HTMLDivElement,MouseEvent>){

        console.log("do")

    }
    
    return(
        <div className='copyright'>

            <h2 style={{textAlign:'center'}}>SOCIAL LINKS</h2>
            
            <div style={{display:'flex',justifyContent:'space-evenly',marginBottom:'0px',marginLeft:'var(--margin)',marginRight:'var(--margin)',alignItems:'center',width:'92px' }} className="soc">
                <a href="https://web.facebook.com/" style={{backgroundColor:'var(--light)',height:'20px',width:'20px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}><FaFacebook size={14} style={{color:'blue'}}/></a> 
                <a href="https://twitter.com" style={{backgroundColor:'var(--light)',height:'20px',width:'20px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}><FaTwitter size={14} style={{color:'#1da1f2'}}/></a>
                <a href="https://www.linkedin.com/in/agpaoc-pmawca/" style={{backgroundColor:'var(--light)',height:'20px',width:'20px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}><FaLinkedin size={14} style={{color:'#007bb5'}}/></a>
                <a href="https://www.youtube.com/channel/UCyR9M3GyMrY6jvDndt4APjw" style={{backgroundColor:'var(--light)',height:'20px',width:'20px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}><FaYoutube size={14} style={{color:'#ff0000'}}/></a>  
            </div>
            {/* <div id="google_translate_element" onClick={e=>Send(e)}></div> */}

            <p style={{marginBottom:'0px',fontSize:'var(--fontsize)'}}>© Copyright {year}. All Rights Reserved EShop.</p> 
           
        
        </div>
    )
}

export default Copyright