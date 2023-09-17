import React from 'react'
import Display from '../components/Display'
import { Helmet } from 'react-helmet'


function SpecificsPage(props:any){
    return(
        <>
        <Helmet>
            <title> ESHOP | Filter {props.data}</title>

        </Helmet>
         <div className='mainSizing'>
            <Display/>
            
        </div>
        </>
       
    )
}

export default SpecificsPage