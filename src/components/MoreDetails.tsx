import React from 'react'


function MoreDetails(props:any){
    return(
        <>
             <div className='moreD'>
               <h2 style={{marginBottom:'var(--margin)'}}>DETAILS</h2>
               <div style={{marginBottom:'var(--margin)x'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus distinctio reiciendis numquam dolorum dolore a ad, eveniet ullam saepe! Doloremque adipisci vel neque repellendus quisquam dolore fugit perferendis repudiandae officiis. Accusamus impedit nulla in! Iste et tenetur deleniti cum voluptatibus voluptates magni voluptate, est ipsum asperiores minima quo, eos, hic earum. Sed quod ut, repellendus eum tenetur in obcaecati maxime cum quae modi fugit, recusandae laudantium atque ipsam alias autem, iure reprehenderit animi sequi? Nemo id voluptatibus molestiae quos, aperiam nesciunt ducimus quasi omnis saepe aut! Optio reiciendis, esse, minima voluptatum blanditiis soluta totam ipsa, temporibus deserunt provident quos quidem!
   
               </div>
            </div>
            
            <div /*style={props.reviews===''?{visibility:'hidden',height:'0px'}:{visibility:'visible'}}*/ className='reviews'>
               <h2 style={{marginBottom:'var(--margin)'}}>REVIEWS</h2>
               <ul style={{marginBottom:'var(--margin)'}}>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, tenetur.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, tenetur.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, tenetur.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, tenetur.</li>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, tenetur.</li>
               </ul>
            </div>
        </>
    )
}

export default MoreDetails