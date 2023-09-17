import React,{useContext} from 'react'
import {Link,Outlet} from 'react-router-dom'
import Fav from './images/favorite.png'
import noFav from  './images/noFavourite.png'
import { CartListNumber } from './App'

function ProdOne(props:any){

    const {cart,setCart} = useContext(CartListNumber)
  

  

    function slice(t:any){

        const v:string=t
        return v.slice(0,30)

    }
    const handlaAdd = (e:any)=>{
        setCart([...cart,{pn:props.productName,
            pp:props.price,
            pq:1,
            pc:'',
            ps:'',
            pid:props.id}])

            

    }
  
    return  (
        
        <div className='imageViews' key={props.id} style={props.rating==='0'?{visibility:'hidden',width:'0px',height:'fit-content',backgroundColor:'green'}:{visibility:'visible'}} >
        <img src={props.productImage}  alt='product img' className='prod_img'/>
        
        <div className='prodView1'>
            <p className='prodRating'><Link to='/MoreDetails' style={{color:'var(--dark)',textDecoration:'none'}}>{slice(props.productName)}</Link></p>
            <p className='prodRating'><strong style={{fontSize:'20px'}}>#</strong>{props.price}</p>
        </div>
        <div className='prodView2'>
        
            <div>
                
                {
                    props.rating >=1?<img src={Fav} alt='nil' />: <img src={noFav} alt='nil'/>
                   
                }
                {
                    props.rating >=2?<img src={Fav} alt='nil'/>: <img src={noFav} alt='nil'/>
                }
                {
                    props.rating >=3?<img src={Fav} alt='nil'/>: <img src={noFav} alt='nil'/>
                   
                }
                {
                    props.rating >=4?<img src={Fav} alt='nil'/>: <img src={noFav} alt='nil'/>
                   
                }
                {
                    props.rating >=5?<img src={Fav} alt='nil'/>: <img src={noFav} alt='nil'/>
                   
                }
            </div>
            <button type="submit" onClick={handlaAdd} className='addCart'>ADD TO CART</button>
        </div>
        <Outlet/>
        </div>

    );

}

export default ProdOne;