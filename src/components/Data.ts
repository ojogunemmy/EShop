import ProductDefinition from './ProductDefinition';


var database:ProductDefinition[] =[]
var cart:ProductDefinition[] = []

function AddProduct(prod:ProductDefinition):void{
    database.push(prod);
    
}

function getProducts():ProductDefinition[]{

    return database

}

function AddToProduct(prod:ProductDefinition):void{
    cart.push(prod);
    
}

function getCartSelection():ProductDefinition[]{

    return cart

}




export default AddProduct;
export {getProducts,AddToProduct,getCartSelection}