import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Signup from '../components/Signup'
import '../components/css/Home.css'

function SignupPage(){
    return(
       
        <div className='mainSizing'>
            <Signup/>
        </div>
        
    )
}

export default SignupPage