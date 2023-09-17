import React from 'react'
import Header from '../components/common/Header'
import Signin from '../components/signin'
import Footer from '../components/common/Footer'
import { Helmet } from 'react-helmet'

function SigninPage(){
    return(
       
        <>
        <Helmet>
            <title>ESHOP | Sign in</title>
        </Helmet>
        <div className='mainSizing'>
            <Signin/>
        </div>
        </>
       
    )
}

export default SigninPage