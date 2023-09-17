import React from 'react'
import { Helmet } from 'react-helmet';
import { Link,Outlet} from 'react-router-dom';

function NotFound(){
    return (
    <>
    <Helmet>
        <title>ESHOP | page not found</title>
    </Helmet>
    <div className='mainSizing'>
        <p>404 page Not found
            
        <Link to="/" className='rmd'> Go Home</Link>
        </p>
        
    </div>
    <Outlet/>
    </>
    );
}

export default NotFound;