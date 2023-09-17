import React,{CSSProperties} from "react";
import SpecificView from "./SpeciificView";

function Options(props:any){
    const lab:CSSProperties = {width:'100%',textAlign:'justify',fontWeight:'800'}
    const optt:CSSProperties = {width:'100%',height:'35px',borderRadius:'2px',backgroundColor:'var(--light)',padding:'5px'}
    const drop:CSSProperties = {display:'flex',flexDirection:'column',marginTop:'var(--margin)',justifyContent:'space-evenly',width:'100%'}
    return(
        <div style={drop}>
           <label htmlFor={props.name} style={lab}>{props.name}</label>
            <select name={props.name}  id={props.name} style={optt}>
            <option value="" className="eachSel">-- Choose an option --</option>
            </select>
        </div>
    )
}
function FilterForm(prop:any){

    return(
    <form className="filterForm">
    <Options name='Brand'/>
    <Options name='Price'/>
    <Options name='Color'/>
    <Options name='Size'/>
    {
        Rating()
    }
    <button type="submit" className="addCart">Filter</button>
    </form>

    )
    

}

function Rating(){
    
    const Rating:CSSProperties = {display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',width:'100%'}
    const eachRate:CSSProperties = {display:'flex',justifyContent:'flex-start',alignItems:'center',width:'80px',padding:'2px'}
    const rad:CSSProperties = {marginLeft:'5px'}



    return(
        <>
        <label htmlFor="Rating" style={{width:'100%',textAlign:'justify',fontWeight:'800'}}>Ratings</label>
            <div style={Rating}>
                <div style={eachRate}>
                <label htmlFor="1">1 stars</label>
                <input type="checkbox" name="" style={rad} id="" />
                </div>
                <div style={eachRate}>
                <label htmlFor="2">2 stars</label>
                <input type="checkbox" name=""  style={rad} id="" />
                </div>

                <div style={eachRate}>
                <label htmlFor="3">3 stars</label>
                <input type="checkbox" name=""  style={rad} id="" />
                </div>

                <div style={eachRate}>
                <label htmlFor="4">4 stars</label>
                <input type="checkbox" name=""  style={rad} id="" />
                </div>

                <div style={eachRate}>
                <label htmlFor="5">5 stars</label>
                <input type="checkbox" name=""  style={rad} id="" />
                </div>

            </div>
        </>
    )
}


function Filter(props:any){

    



    return(
        <div className="filter">

            <FilterForm/>
           
            <SpecificView/>
            

        </div>

    )

}

function Display(props:any){

    return(
        <>
        
        <Filter/>







        </>
    )

}

export default Display
export {FilterForm}