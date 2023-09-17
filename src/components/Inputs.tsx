import React from "react";

function Input(props:any){

    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'5px',width:'100%'}}>
            <label style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',width:'100%'}}>{props.label}</label>
            {
                props.type==='submit'?<button style={{ fontSize:'var(--fontsize)',display:'flex',justifyContent:'center',alignItems:'center',color:'var(--light)',height:'35px',fontWeight:'800',backgroundColor:'var(--dark)',padding:'20px',outline:'1px solid black',margin:'0px',width:'100%'}}>{props.value}</button>:<input  type={props.type} name={props.label} placeholder={props.placeholder} onFocus={props.onFocus} onChange={props.onChange}  style={{width:'100%',border:'1px solid var(--light-dark)',height:'35px',color:'black',padding:'2px',marginTop:'2px'}} />

            }
            <div style={props.error ===''?{display:'none'}:{ display:'block',color:'red',width:'100%',fontSize:'10px',textAlign:'justify',visibility:'visible',padding:'2px'}}>{props.error}</div>
        </div>
    )



}


export default Input