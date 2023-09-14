import React from "react";

function Input(props:any){

    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'5px',width:'100%'}}>
            <label style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',width:'100%'}}>{props.label}</label>
            {
                props.type==='submit'?<button style={{ fontSize:'var(--fontsize)',display:'flex',justifyContent:'center',alignItems:'center',color:'var(--light)',height:'35px',fontWeight:'800',backgroundColor:'var(--dark)',padding:'20px',outline:'1px solid black',margin:'0px',width:'100%'}}>{props.value}</button>:<input  type={props.type} name={props.label} placeholder={props.placeholder}  onChange={props.onChange}  style={{width:'100%',height:'35px',color:'black',padding:'2px',marginTop:'2px'}} />

            }
            <div style={props.error ===''?{visibility:'hidden'}:{color:'red',fontSize:'10px',visibility:'visible',padding:'2px'}}>{props.error}</div>
        </div>
    )



}


export default Input