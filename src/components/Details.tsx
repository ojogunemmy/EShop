import React from 'react'
import './css/Details.css'
import { AiFillStar } from 'react-icons/ai'
import MoreDetails from './MoreDetails'


function Details(props:any){
    
    return(
        <div className='layout'>
            <div className='breadcrumbs'>BreadCrumbs</div>
            <div className='topDetails'>
              
                <div className='data'>
                    {/* .data .prodD .main img
                    .data div .main */}
                  <div className='prodD'>
                  <div className='main'>
                  <img src={props.productImage} alt='product img'/>
                  </div>
                  <div className='body'>
                  <img src={props.productImage} alt='product img'/>
                  <img src={props.productImage} alt='product img'/>
                  <img src={props.productImage} alt='product img'/>
                  <img src={props.productImage} alt='product img'/>
                  </div>
                </div>
                  <div className='prodData'>
                    <div>Product name</div>
                    <div>Brand</div>
                    <div style={props.rating===0||props.rating===''?{visibility:'hidden',height:'0px',margin:'0px'}:{visibility:'visible'}}>
                {
                    props.rating >=1? <AiFillStar color='#0A174E' id='noOutline'/>: <AiFillStar color='white' id='outline' style={{visibility:'hidden',height:'0px'}}/>
                   
                }
                {
                    props.rating >=2? <AiFillStar color='#0A174E' id='noOutline'/>: <AiFillStar color='white' id='outline' style={{visibility:'hidden',height:'0px'}}/>

                }
                {
                    props.rating >=3? <AiFillStar color='#0A174E' id='noOutline'/>: <AiFillStar color='white' id='outline' style={{visibility:'hidden',height:'0px'}}/>
                   
                }
                {
                    props.rating >=4? <AiFillStar color='#0A174E' id='noOutline'/>: <AiFillStar color='white' id='outline' style={{visibility:'hidden',height:'0px'}}/>
                   
                }
                {
                    props.rating >=5? <AiFillStar color='#0A174E' id='noOutline'/>: <AiFillStar color='white' id='outline' style={{visibility:'hidden',height:'0px'}}/>
                   
                }
                    </div>
                    <div>Delivery</div>
                    <div>Price</div>
                    <div>Status</div>
                    <div>shipping info</div>
                    <div>others</div>
                    <button className='addCart'>
                      ADD TO CART
                   </button>
                  </div>
                    
                </div>
             
               <div className='delivery'>
                <div>
                    <h2>Delivery details</h2>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ipsa asperiores harum sapiente dignissimos autem! Est voluptatum rem cupiditate dolorum perferendis, laboriosam aut laudantium, reprehenderit libero asperiores rerum voluptatibus magni eum facere quae provident ex nisi, dolorem distinctio. Labore harum amet iusto id hic. Architecto, nihil? Laboriosam libero fugiat itaque, excepturi nemo maxime ipsam, rem saepe voluptatem quaerat accusantium.
                    </div>

                </div>
                <div>
                  <h2>Delivery Policy</h2>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae mollitia, quo nobis quas accusamus dignissimos voluptatem dolorem amet earum?
                  </div>
                  
                </div>
                <div>
                   <h2>Return policy</h2> 
                   <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim rerum vero explicabo sunt expedita aut voluptas a corrupti accusamus?
                   </div>
                </div>
               </div>
               
            </div>
            <MoreDetails reviews=''/>

         
            
        






            
        </div>
    )

}

export default Details