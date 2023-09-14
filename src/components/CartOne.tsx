import React from 'react'
import { FaMinus,FaPlus } from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

const style:React.CSSProperties ={

    visibility:'visible',
    fontSize:'14px',
    fontWeight:'bolder',
    position:'relative',
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
        <div className='cartOne'>
            
            <img src={props.image===''?'':props.image} alt="null" />
            <p style={props.discount===0?nostyle:style}>{props.discount===0?'no discount':props.discount}%</p>

            <div className='prod'>

            <p className='pn'>{props.productName===''?'Product name':props.productName}</p>
            <p className=''><strong>#</strong>{props.price===0?'unit Price':props.price}</p>
            </div>
          
           
            <div className='quanView'>
               
                <p> Total</p>
                <h4 style={{fontSize:'var(--fontsize)'}}><strong>#</strong>{props.price===0?'1000000000000':props.price}</h4>
            
            <div className='quan'>
                <FaMinus size={18} className='minusIcon' style={{backgroundColor:'#dddddd',borderRadius:'50%',width:'20px',height:'20px',padding:'5px'}}/>
                <input type='text'/>
                <FaPlus size={18} className='plusIcon' style={{backgroundColor:'#dddddd',borderRadius:'50%',width:'20px',height:'20px',padding:'5px'}}/>
            </div>
               
            </div>
            
            <div className='delete'>
            <MdDelete size={28} color='red' className='deleteIcon' style={{backgroundColor:'#dddddd',borderRadius:'100%',padding:'5px'}}/>
            </div>
            

                    
        </div>
    )
}

export default CartOne