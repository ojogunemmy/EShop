import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Signup from '../components/Signup'
import '../components/css/Home.css'
import { Helmet } from 'react-helmet'

function SignupPage(){
    return(
       <>
       <Helmet>
        <title>ESHOP | Sign up</title>
       </Helmet>
       <div className='mainSizing'>
            <Signup/>
        </div>
       </>
        
        
    )
}

export default SignupPage