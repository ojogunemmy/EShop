import React from 'react'
import productImg from './images/images (13).jpeg'


function Recently(props:any){
    return <div className='imageViews1'>
    <img src={props.image} alt='product img' className='prod_img'/>
    <div>{props.productName}</div>
</div>

}
function RecentlyViewed(props:any){
    return (
        <div className='layout'>
          
            <h3 style={{marginBottom:'0px',}}>{props.viewName}</h3>
            
           <div className='View' style={{marginTop:'0px'}}>

            <Recently image={productImg} productName='insecticide'/>
            <Recently image={productImg} productName='insecticide'/>
            <Recently image={productImg} productName='insecticide'/>
            <Recently image={productImg} productName='insecticide'/>
            <Recently image={productImg} productName='insecticide'/>


           </div>
        </div>

    );

}

export default RecentlyViewed