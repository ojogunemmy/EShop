import React from 'react'



function CategorSuggestionView(props:any){


    return <div className='imageViews1' >
        <img src={props.categoryImage}  className='prod_img' alt='product img' />
        <div>{props.category}</div>
    </div>


}

export default CategorSuggestionView;