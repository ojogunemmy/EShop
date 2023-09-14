import React from 'react'


function Combo(props:any){
    return <div className='imageViews1'>
    <img src={props.image} alt='product img' className='prod_img'/>
    <div>{props.productName}</div>
</div>

}

export default Combo;