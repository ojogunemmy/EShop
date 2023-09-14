import React,{useState,useContext} from 'react'
import Input from './Inputs'
import { Link,Outlet } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha"
import { AuthenticationStatus } from './App'



function Signup(){

    const [token,setToken] = useState('')
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthenticationStatus)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setComfirmPassword] = useState('')

    //Errors state
    // const [tokeError,setTokenError] = useState('')
    // const [nameError,setNameError] = useState('')
    // const [emailError,setEmailError] = useState('')
    // const [passwordError,setPasswordError] = useState('')
    // const [confirmPasswordError,setComfirmPasswordError] = useState('')


    const handleSubmit =(e:any)=>{
       console.log({
        AuthToken:token,
        username:name,
        userEmail:email,
        userPassword:password,

       })
    
    }

    const handleVerify =(e:any)=>{
        setToken(e)
    
    }

    return (
        <div className='authView'>
    
        <form className='form' onSubmit={handleSubmit}>
        <h2>ESHOP</h2>
        <h3>Unlock a World of Endless Possibilities at Our Ecommerce Hub</h3>
        
        <Input label='Name' type='text' onChange={(e:any)=>setName(e.target.value)} error=''/>
        <Input label='Email' onChange={(e:any)=>setEmail(e.target.value)} type='text'/>
        <Input label='Password'   onChange={(e:any)=>setPassword(e.target.value)} type='password'/>
        <Input label='Comfirm Password'  onChange={(e:any)=>setComfirmPassword(e.target.value)} type='password'/>
        <p style={{textAlign:'left',marginTop:'var(--margin)'}}>By clicking create account you agree to platform. <Link to='/terms' style={{textDecoration:'none',color:'var(--info)'}}> Terms and conditions</Link></p>
         
        <div style={{width:'100%',marginTop:'var(--margin)',marginBottom:'var(--margin)'}}>

        <ReCAPTCHA style={{width:'100%',marginTop:'var(--margin)'}} 
        sitekey="6LdohtonAAAAAPgmQvvu1FhzokMPpNqQ1q2iFu16"
        type='image'
        onChange={handleVerify}
         />
       </div>

       
        <Input type='submit' value='CREATE ACCOUNT' />
        <p style={{marginTop:'var(--margin)'}}>Already on EShop?<Link to='/Signin' style={{textDecoration:'none',color:'var(--info)'}}> Sign in</Link></p>
       
        <Outlet/>
        </form>
       
        </div>
        
        
    )

}

export default Signup