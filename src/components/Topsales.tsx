import React from 'react'
import CategorSuggestionView from './Category';
import top from './images/images (13).jpeg'

function Topsales(){
    return (
        <div className='layout'>
            
           <h2>HOT SALES</h2>
            
           <div className='scrollView'>
           <CategorSuggestionView categoryImage={top} category='Insecticide'/>
           <CategorSuggestionView categoryImage={top} category='Insecticide'/>
           <CategorSuggestionView categoryImage={top} category='Insecticide'/>
           <CategorSuggestionView categoryImage={top} category='Insecticide'/>
           <CategorSuggestionView categoryImage={top} category='Insecticide'/>
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
