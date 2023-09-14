import React from 'react'

interface ProductDefinition{
	getProduct():{
        id:string,
		productName:string,
		productImages:string[],
		productPrice:number;
		productCategory:string,
		productSubCategory:string,
		productDescription:string,
		productSpecification:string;
		productVariations:string,
		productShippingInformation:string,
		productReturnInformation:string,
		productAdditional:string
  }
   
}

export default ProductDefinition;                                                                               