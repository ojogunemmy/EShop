import React from 'react'
import Topsales from '../components/Topsales';
import TopBrands from '../components/TopBrands'
import ProductView from '../components/ProductView';
import ListProduct from '../components/ListProducts';
import '../components/css/Home.css';
import Promotion from '../components/Promotion';



function Home(){
   return(
        <div id='content'>
            <Promotion/>
            <Topsales/>
            <TopBrands/>
            <ProductView/>
            <ListProduct/>
        </div>
        
    );
}

export default Home;