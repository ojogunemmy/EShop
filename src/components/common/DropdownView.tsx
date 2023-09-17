import React,{CSSProperties} from 'react'
import { Link,Outlet } from 'react-router-dom'


function Individual(props:any){
    const sty:CSSProperties = {fontSize:'var(--fontsize)',margin:'2px',padding:'0px',color:'var(--dark)',height:'fit-content'}
    
    return(
        <div style={{margin:'var(--margin)',padding:'var(--padding)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',height:'100%'}}>
            <h4 style={{marginBottom:'var(--margin)',width:'100%',padding:'0px',margin:'2px',height:'fit-content',textAlign:'left',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>{props.category}</h4>

            <Link to='' style={sty}>Pets and Pet Supplies</Link>
            <Link to='' style={sty}>Office and Stationery</Link>
            <Link to='' style={sty}>Art and Crafts</Link>
            <Link to='' style={sty}>Baby and Maternity</Link>
            <Link to='' style={sty}> Gifts and Occasions</Link>
            <Outlet/>

         </div>

    )
}

function Dropdown(props:any){
    


    return (
        
        <div style={props.style} >

            <Individual category='Electronics'/>
            <Individual category='Fashion and Apparel'/>

            <Individual category='Home and Furniture'/>
            <Individual category='Food and Groceries'/>

            <Individual category='Jewelry and Watches'/>
            <Individual category='Others'/>

         

           

         


        </div>
       
    )

}

export default Dropdown
export {Individual}