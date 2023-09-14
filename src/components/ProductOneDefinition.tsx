import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {Link,Outlet} from 'react-router-dom'
import Fav from './images/favorite.png'
import noFav from  './images/noFavourite.png'

function ProductOneDefinition(props:any){
  

  

    function slice(t:any){

        const v:string=t
        return v.slice(0,30)

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
                    props.rating >=1?<img src={Fav} />: <img src={noFav}/>
                   
                }
                {
                    props.rating >=2?<img src={Fav}/>: <img src={noFav}/>
                }
                {
                    props.rating >=3?<img src={Fav}/>: <img src={noFav}/>
                   
                }
                {
                    props.rating >=4?<img src={Fav}/>: <img src={noFav}/>
                   
                }
                {
                    props.rating >=5?<img src={Fav}/>: <img src={noFav}/>
                   
                }
            </div>
            <button type="submit" className='addCart'>ADD TO CART</button>
        </div>
        <Outlet/>
        </div>

    );

}

export default ProductOneDefinition;