import React from 'react'
// import { getProducts as data } from './Data'
const dat =[1,5,6,4,7,5,8,90,50]
const datas= dat.map(function(x){
    return(
        <li className='catList'>{x}</li>
    )
})
function FilterProductView(){

    return(
       <div className='listCategory'>
        {datas}
       </div>
    )

}

export default FilterProductView