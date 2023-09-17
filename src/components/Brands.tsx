import React from 'react'


function BrandView(props:any){
    return (
    /* Usually the top product in a certain brand. */
    <div className='brandName' style={{backgroundImage:'URL("'+props.image+'")',width:'30%',
    backgroundRepeat:"no-repeat",backgroundSize:'100% 100%',backgroundOrigin:'inherit',display:'inline-block',padding:'var(--padding)',backdropFilter:'blur(10px)'}}>
        {props.brand}
        </div>
    )
}

export default BrandView;