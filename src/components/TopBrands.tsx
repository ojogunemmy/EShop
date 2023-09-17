import React from 'react'
import BrandView from './Brands';
import pic from './images/images (13).jpeg'

function TopBrands(){

   

  
    return (
        <div className='layout'>
            
           <h2>BRANDS</h2>
            
           <div className='scrollView'>

           <BrandView image={pic} brand='May and Baker'/>
           <BrandView image={pic}brand='Raid'/>
           <BrandView image={pic} brand='May and Baker'/>
           <BrandView image={pic} brand='Raid'/>
           
           
           </div>
        </div>

    );

}

export default TopBrands;
