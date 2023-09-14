import React from 'react'
import Seasonal from './Seasonal';
import productImg from './images/images (13).jpeg'

function TopSeasonal(props:any){
    return (
        <div className='layout'>
            
            <h3 style={{marginBottom:'0px'}}>{props.viewName}</h3>
            
           <div className='View' style={{marginTop:'0px'}}>

            <Seasonal image={productImg} productName='Insecticide'/>
            <Seasonal image={productImg} productName='Insecticide'/>
            <Seasonal image={productImg} productName='Insecticide'/>
            <Seasonal image={productImg} productName='Insecticide'/>
            <Seasonal image={productImg} productName='Insecticide'/>

            <Seasonal image={productImg} productName='Insecticide'/>
            <Seasonal image={productImg} productName='Insecticide'/>
            <Seasonal image={productImg} productName='Insecticide'/>



           
           </div>
        </div>

    );

}

export default TopSeasonal