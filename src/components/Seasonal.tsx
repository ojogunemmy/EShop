

import React from 'react'


function Seasonal(props:any){
    return <div className='imageViews1'>
    <img src={props.image} alt='product img' className='prod_img'/>
    <div>{props.productName}</div>
</div>

}

export default Seasonal;