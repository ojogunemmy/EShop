import React from 'react'
import { FaMinus,FaPlus } from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
const del:React.CSSProperties ={

    visibility:'visible',
    fontSize:'14px',
    fontWeight:'bolder',
    position:'relative',
    color:'red',
    right:'5%',
    top:'-10%',
    backgroundColor:'#dddddd',
    height:'20px',
    width:'40px',
    display:'flex',
    padding:'2px',
    zIndex:'-1',
    justifyContent:'center',
    alignItems:'center'
}



const style:React.CSSProperties ={

    visibility:'visible',
    fontSize:'var(--fontsize)',
    fontWeight:'bolder',
    position:'relative',
    zIndex:'-1',
    color:'red',
    right:'4%',
    bottom:'10%',
    backgroundColor:'#dddddd',
    height:'18px',
    width:'fit-content',
    padding:'2px'
}

const nostyle:React.CSSProperties ={

    visibility:'hidden',
    fontSize:'14px',
    fontWeight:'bolder',
    position:'relative',
    color:'red',
    right:'4%',
    bottom:'10%',
    backgroundColor:'#dddddd',
    height:'18px',
    width:'0px',
    padding:'0px'
}


function CartOne(props:any){
    return(
        <>
        <div className='cartOne'>
            
            <img src={props.image===''?'':props.image} style={{zIndex:'-1'}} alt="null" />
            <p style={props.discount===0?nostyle:style}>{props.discount===0?'no discount':props.discount}%</p>

            <div className='prod'>

            <p className='pn'>{props.productName===''?'Product name':props.productName}</p>
            <p className='pn'><strong>#</strong>{props.price===0?'unit Price':props.price}</p>
            </div>
          
           
            <div className='quanView'>
               
                <p className='pn'> Total</p>
                <p className='pn'><strong>#</strong>{props.price===0?'1000000000000':props.price}</p>
            
            <div className='quan'>
                <FaMinus size={24} className='minusIcon' style={{borderRadius:'50%',width:'20px',height:'20px',padding:'5px'}}/>
                <input type='text'/>
                <FaPlus size={24} className='plusIcon' style={{borderRadius:'50%',width:'20px',height:'20px',padding:'5px'}}/>
            </div>
               
            </div>
           
            <MdDelete size={10} color='red' style={del}/>
            
        </div>
           
        
       
        </>
        
    )
}

export default CartOne