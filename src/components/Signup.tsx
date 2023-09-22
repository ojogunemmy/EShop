import React,{useState,useContext} from 'react'
import Input from './Inputs'
import { Link,Outlet } from 'react-router-dom'
import { AuthenticationStatus } from './App'
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
  } from 'react-google-recaptcha-v3';


interface entries{

    token:string,
    name:string,
    email:string,
    password:string,
    confirmPassword:string

}




function Signup(){

    const [token,setToken] = useState('')
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthenticationStatus)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setComfirmPassword] = useState('')

    //Errors state
    const [tokeError,setTokenError] = useState('')
    const [nameError,setNameError] = useState('')
    const [emailError,setEmailError] = useState('')
    const [passwordError,setPasswordError] = useState('')
    const [confirmPasswordError,setConfirmPasswordError] = useState('')
    function Verification(value:entries){
         // Name check
        if(value.name === ''){
            setNameError('Enter a name')

        }else{
            setNameError('')
        }
        
        // Email Check
        if(value.email === ''){
            setEmailError('No Email Entered')

        }else{
            setEmailError('')
        }

        // PassWord check
        if(value.password === ''){
            setPasswordError('Enter your Password ')

        }else{
            setPasswordError('')
        }

         // Comfirm Passwod check
         if(value.confirmPassword !== value.password){
            setConfirmPasswordError('Confirm password does not match ')

        }else{
            setConfirmPasswordError('')
        }

        //Token check
        if(value.token === ''){
            setTokenError('confirm you are not a robot')
        }else{
            setTokenError('')
        }
    

    }



    


    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault()
        
       console.log({
        token:token,
        name:name,
        email:email,
        password:password,
        confirmPassword:confirmPassword

       })

       Verification({
        token:token,
        name:name,
        email:email,
        password:password,
        confirmPassword:confirmPassword

       })
       

       setTimeout(()=>{

        setToken('')
        
       },10000)




    
    }

    const handleVerify =(e:any)=>{
        setToken(e)
    
    }

    return (
        <div className='authView'>
    
        <form className='form' onSubmit={handleSubmit}>
        <h2>ESHOP</h2>
        <h3>Unlock a World of Endless Possibilities at Our Ecommerce Hub</h3>
        
        <Input label='Name' type='text'  onChange={(e:any)=>setName(e.target.value)}  error={nameError}/>
        <Input label='Email' onChange={(e:any)=>setEmail(e.target.value)} type='text' error={emailError}/>
        <Input label='Password'   onChange={(e:any)=>setPassword(e.target.value)} type='password' error={passwordError}/>
        <Input label='Comfirm Password'  onChange={(e:any)=>setComfirmPassword(e.target.value)} type='password' error={confirmPasswordError}/>
        <p style={{textAlign:'left',marginTop:'var(--margin)'}}>By clicking create account you agree to platform. <Link to='/terms' style={{textDecoration:'none',color:'var(--info)'}}> Terms and conditions</Link></p>
         
        <div style={{width:'100%',marginTop:'var(--margin)',marginBottom:'var(--margin)'}}>
        

        <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA}>
         <GoogleReCaptcha onVerify={handleVerify} />
       </GoogleReCaptchaProvider>
         <div style={tokeError!==''?{ display:'block',color:'red',width:'100%',fontSize:'10px',textAlign:'left',padding:'2px'}:{display:'none'}}>
            {
                tokeError
            }
        </div>
       </div>

       
        <Input type='submit' value='CREATE ACCOUNT' />
        <p style={{marginTop:'var(--margin)'}}>Already on EShop?<Link to='/Signin' style={{textDecoration:'none',color:'var(--info)'}}> Sign in</Link></p>
       
        <Outlet/>
        </form>
       
        </div>
        
        
    )

}

export default Signup