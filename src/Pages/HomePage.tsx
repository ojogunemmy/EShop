import React from 'react'
import Topsales from '../components/Topsales';
import TopBrands from '../components/TopBrands'
import ProductView from '../components/ProductView';
import ListProduct from '../components/ListProducts';
import '../components/css/Home.css';
import Promotion from '../components/Promotion';
import { Helmet } from 'react-helmet';



function Home(){
   return(
    <>
    <Helmet>
        <title>ESHOP | HOME - Welcome to a home of immense experienc</title>
    </Helmet>
       <div className='mainSizing'>
            <Promotion/>
            <Topsales/>
            <TopBrands/>
            <ProductView/>
            <ListProduct/>
        </div>
        
    </>
     
    );
}

export default Home;