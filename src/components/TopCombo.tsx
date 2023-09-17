import React from 'react'
import Combo from './Combo';
import Com from './images/images (13).jpeg'

function TopCombo(props:any){
    return (
        <div className='layout'>
            
            <h3 style={{marginBottom:'0px'}}>{props.viewName}</h3>
           
           <div className='scrollView' style={{marginTop:'0px'}}>


            <Combo image={Com} productName='Insecticide'/>
            <Combo image={Com}  productName='Insecticide'/>
            <Combo image={Com}  productName='Insecticide'/>
            <Combo image={Com}  productName='Insecticide'/>
           
           </div>
        </div>

    );

}

export default TopCombo;
