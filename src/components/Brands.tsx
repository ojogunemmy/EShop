import React from 'react'


function BrandView(props:any){
    return (
    /* Usually the top product in a certain brand. */
    <div className='brandName' style={{backgroundImage:'URL("'+props.image+'")',width:'150px',
    backgroundRepeat:"no-repeat",backgroundSize:'100% 100%',backgroundOrigin:'inherit',display:'inline-block',padding:'var(--padding)'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',fontSize:'var(--fontsize)',backdropFilter:'blur(5px)'}}>{props.brand}</div>
        </div>
    )
}

export default BrandView;