import React from 'react'
import { Link,Outlet} from 'react-router-dom';

function NotFound(){
    return (<>
    <div className='mainSizing'>
        <p>404 page Not found
            
        <Link to="/"> Go Home</Link>
        </p>
        
    </div>
    <Outlet/>
    </>
    );
}

export default NotFound;