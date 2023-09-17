import React from 'react'
import '../components/css/Cart.css'
import CartOne from '../components/CartOne'
import pic from './images/images (13).jpeg'

import ProductDefinition from './ProductDefinition'

function CartEmpty(props:any){

    return(
        <div className='cart' style={{width:'100%',justifyContent:'center',alignItems:'center',border:'1px solid #dddddd'}}>
          <div style={{ width:'300px',height:'300px',display:'flex',justifyContent:'center',alignItems:'center'}}>Cart Empty</div>
        </div>
    )

}
function CartLoaded(props:any){

    return(

        
        <div className='cartView'>

            <div className='cart'>
                <h2 style={{marginBottom:'var(--margin)'}}>CART</h2>
                <CartOne image={pic} productName='Deep Freezer 12ml' price={5000000000} discount= {-5}/>
                <CartOne image={pic} productName='Raid ttsyydsgshhghdghghghsdhghsshhhsdhgdghg' price={500} discount= {-5}/>
                <CartOne image={pic} productName='Raid ttsyydsgshhghdghghghsdhghsshhhsdhgdghg' price={500} discount= {-5}/>
            </div>
            <div className='checkout'>
            <h3>Summary</h3>
            <div>
                <h4>Total:</h4>
                <h4>Discount</h4>
                <div className='addCart'>CHECKOUT</div>
            </div>
            </div>
           

        </div>
    )



}

function Cart(props:any){

    const cart:ProductDefinition[] = props.cart
   
    return(
       <>
         {
            cart.length === 0 ? <CartEmpty/> : <CartLoaded/>
         }

       </>
       

    )

}

export default Cart