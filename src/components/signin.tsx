import React,{useState,useContext} from 'react'
import Input from './Inputs'
import { Link,Outlet } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha"
import { AuthenticationStatus } from './App'

function Signin(){
    const [token,setToken] = useState('')
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthenticationStatus)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState(0)



    const handleVerify =(e:any)=>{
        setToken(e)
      
       
    }
    
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
       
        console.log({
            authToken:token,
            userEmail:email,
            userPassword:password

        })
        setIsLoggedIn(true)
    }
        
      
       


    return (
        <div className='authView'>
       
        <form className='form' onSubmit={handleSubmit}>
        <h2>ESHOP</h2>
        <h3>Experience a World of Endless Possibilities at Our Ecommerce Hub</h3>
        
        <Input label='Email' onChange={(e:any)=>setEmail(e.target.value)} type='text'/>
        
        <Input label='Password' onChange={(e:any)=>setPassword(e.target.value)} type='password' />
        <p  style={{textAlign:'right',marginTop:'var(--margin)',width:'100%'}}><Link to='/Forgot' style={{textDecoration:'none',color:'var(--info)'}}>Forgot password</Link></p>
        <div style={{width:'100%',marginTop:'var(--margin)',marginBottom:'var(--margin)'}}>

       <ReCAPTCHA style={{width:'100%',marginTop:'var(--margin)'}} 
       sitekey="6LdohtonAAAAAPgmQvvu1FhzokMPpNqQ1q2iFu16"
       type='image'
       onChange={handleVerify}
       />
       </div>

       
        <Input type='submit' value='SIGN IN'/>
        <p  style={{marginTop:'var(--margin)'}}>Don't have an account? <Link to='/Signup' style={{textDecoration:'none',color:'var(--info)'}}>Create one.</Link></p>
        
       <Outlet/>
       </form>
       </div>

       
    )


        }

export default Signin