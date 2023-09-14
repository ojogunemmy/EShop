import React from 'react'
import CategorSuggestionView from './Category';
import top from './images/images (13).jpeg'

function Topsales(){
    return (
        <div className='layout'>
            
           <h3>Hot Sales</h3>
            
           <div className='View'>
           <CategorSuggestionView categoryImage={top} category='Insecticide'/>
           <CategorSuggestionView categoryImage={top} category='Insecticide'/>
           <CategorSuggestionView categoryImage={top} category='Insecticide'/>
           <CategorSuggestionView categoryImage={top} category='Insecticide'/>
           <CategorSuggestionView categoryImage={top} category='Insecticide'/>
           </div>
        </div>

    );

}

export default Topsales;
