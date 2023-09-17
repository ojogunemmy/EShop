import React ,{useContext, useState}from "react";
import { Helmet } from 'react-helmet'
import Input from '../components/Inputs'
import ReCAPTCHA from 'react-google-recaptcha';


function ForgotPassword(){
    const [token,setToken] = useState('')
    const [email,setEmail] = useState('')


    const handleLoad = ()=>{

    }
    const handleVerify =(e:any)=>{
        setToken(e)
       

    }

    const handleSubmit = ()=>{

    }
   
    
    return(
        <> 
        {
            handleLoad()
        }
     
     <div className='mainSizing'>
        <Helmet>
            <title>ESHOP | Password Recovery</title>
        </Helmet>
        <div className='authView'>
       
        <form className='form' onSubmit={handleSubmit}>
        
        <div style={{borderColor:'var(--primary)',padding:'5px',backgroundColor:'var(--gray)',textAlign:'justify',borderStyle:'solid',borderWidth:'0px 0px 0px 4px',marginBottom:'var(--margin)',}}>
         Please enter your username or email address. You will receive a link to create a new password via email.
        </div>
        <Input label='Email' type='text' onChange={(e:any)=>setEmail(e.target.value)}/>
        
        <div style={{width:'100%',marginTop:'var(--margin)',marginBottom:'var(--margin)'}}>

            <ReCAPTCHA style={{width:'100%',marginTop:'var(--margin)'}} 
            sitekey={process.env.REACT_APP_RECAPTCHA}
            type='image'
            onChange={handleVerify}
            />
        </div>
       
        <Input type='submit' value='GET NEW PASSWORD'/>
       
        </form>
       </div>
     </div>
       

        </>
       
    )
}

export default ForgotPassword