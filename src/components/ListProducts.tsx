import React from 'react'
import ProductOneDefinition from './ProductOneDefinition'
import { GrFormPrevious} from 'react-icons/gr';
import {MdNavigateNext} from 'react-icons/md'

import ProductDefinition from './ProductDefinition';
import { getProducts as database } from './Data';

let stateNum:number = 0;

function numberSystem(data:ProductDefinition[]): ProductDefinition[]{
    let productLength:number = data.length;
    let nextState:number = productLength < 20 ? productLength : stateNum + 20
    let slice = data.slice(stateNum,nextState);
    
    return slice
}

const datas = numberSystem(database()).map(function (x:ProductDefinition) :JSX.Element{

    return(
        <ProductOneDefinition productName="" productImage={x.getProduct().productImages[0]} price={x.getProduct().productPrice} />
    )

})
function handleNext(x:string){
    if(stateNum<=database().length){
        console.log(database.length+"length")
    }else if(stateNum === database().length){
        console.log(database.length+"length")   
    }else if(stateNum <= 1){
        console.log(database.length+"length")
    }else{

        if(x === 'Next'){
            stateNum = stateNum+20;
            console.log(stateNum)

        }else{
            stateNum = stateNum-20;
            console.log(stateNum)
            
        }
    }
   
   
}

function ReRender(){
    return(
        <div className='View'>
        {datas}
       </div>
    )
}


function ListProduct(){
    return (
        <div className='layout'>
           
            <h3>All Products</h3>
           

            <ReRender/>
          
           
           <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
            <button onClick={x=>handleNext(x.currentTarget.innerText)}  style={{borderRadius:'2px',padding:'4px',margin:'5px',display:'flex',justifyContent:'center',alignItems:'center',color:'var(--light)',backgroundColor:'var(--dark)'}} ><GrFormPrevious/>Prev</button>
            <button onClick={x=>handleNext(x.currentTarget.innerText)}  style={{borderRadius:'2px',padding:'4px',margin:'5px',display:'flex',justifyContent:'center',alignItems:'center',color:'var(--light)',backgroundColor:'var(--dark)'}}>Next<MdNavigateNext/></button>
           </div>
        </div>

    );

}

export default ListProduct;
