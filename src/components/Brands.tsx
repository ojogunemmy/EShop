import React from 'react'


function BrandView(props:any){
    return (
    /* Usually the top product in a certain brand. */
    <div className='brandName' style={{backgroundImage:'URL("'+props.image+'")',width:'fit-content',
    backgroundRepeat:"no-repeat",backgroundSize:'100% 100%',backgroundOrigin:'inherit',padding:'var(--padding)',backdropFilter:'blur(10px)'}}>
        {props.brand}
        </div>
    )
}

export default BrandView;