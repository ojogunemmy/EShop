import React from 'react'
import ProductOneDefinition from './ProductOneDefinition';
import productImg from './images/images (13).jpeg'


function ProductView(props:any){
    return (
        <div className='layout'>
            
            <h3>Suggestions</h3>
            
           <div className='View'>

            <ProductOneDefinition productName='Raid' productImage={productImg} price='500' rating='3'/>
            <ProductOneDefinition productName='Raid' productImage={productImg} price='500' rating='1'/>
            
            <ProductOneDefinition productName='Raid' productImage={productImg} price='500' rating='1'/>
            
            <ProductOneDefinition productName='Raid' productImage={productImg} price='500' rating='4'/>
            
            <ProductOneDefinition productName='Raid' productImage={productImg} price='500' rating='5'/>
            
            <ProductOneDefinition productName='Raid' productImage={productImg} price='500' rating='3'/>
            
            <ProductOneDefinition productName='Raid' productImage={productImg} price='500' rating='2'/>
            
            <ProductOneDefinition productName='Raid' productImage={productImg} price='500' rating='3'/>
            <ProductOneDefinition productName='Raid' productImage={productImg} price='500' rating='1'/>
            
            <ProductOneDefinition productName='Raid' productImage={productImg} price='500' rating='1'/>
            
            <ProductOneDefinition productName='Raid' productImage={productImg} price='500' rating='4'/>
            
            <ProductOneDefinition productName='Raid' productImage={productImg} price='500' rating='5'/>
            
            <ProductOneDefinition productName='Raid' productImage={productImg} price='500' rating='3'/>
            
            <ProductOneDefinition productName='Raid' productImage={productImg} price='500' rating='2'/>


           </div>
        </div>

    );

}

export default ProductView;
