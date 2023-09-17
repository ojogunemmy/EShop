import React from 'react'
import Cart from '../components/Cart'
import Topsales from '../components/Topsales'
import TopSeasonal from '../components/TopSeasonal'
import RecentlyViewed from '../components/RecentlyViewed'


function CartList(props:any){
    return(
   
        
        
        <div className='mainSizing'>

           <Cart cart={[1]}/>
           <RecentlyViewed viewName='VIEWED'/>
           <Topsales/>
           <TopSeasonal viewName='SEASONAL'/>

            
        </div>
        
    )

}

export default CartList