import ProductDefinition from './ProductDefinition'
 
class Product implements ProductDefinition{
  private product:{
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

  constructor(product:{
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
  }){
    this.product = product
  }

  
  public getProduct():{
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
  }{

    return this.product;
    
  }


}

export default Product