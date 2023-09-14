import React,{useState,useEffect} from 'react'
import pic1 from './images/a-discount-2986181.jpg'
import pic2 from './images/10865880_18899269.jpg'
import pic3 from './images/2881088_205.jpg'

function Promotion(props:any){

    
    var [imgSrc,setImgSrc] = useState(0)
   
    var handleClick = (event:React.MouseEvent<HTMLDivElement,MouseEvent>)=>{

        setImgSrc(Number.parseInt(event.currentTarget.id))
    }

   

    
    const images =(imgs:string[]) =>{

      
    const timer = ()=>{
        
        setTimeout(()=>{
            const len = imgs.length-1
            if(imgSrc === len){
                setImgSrc(0)
    
            }else{
                setImgSrc(imgSrc+1)
            }
    
            },10000)

            return(
                <div style={{width:'100%'}}>
                <img src={imgs[imgSrc]} style={{width:'100%',height:'200px'}} alt="promotion"  />
                </div>
            )

    }
            
        return(
            <>



              {
               
                timer()
              }
               
                    <div style={{display:'flex',flexDirection:'row',width:'100%',margin:'var(--margin)',justifyContent:'center',alignItems:'center'}}> 
                     {
                        imgs.map((x,index)=>{
                            
                            return(
                                 <div className={imgSrc === index ? 'imgChooser':'nImgChooser'} id={index.toString()} onClick={e=>handleClick(e)}></div>
                            )
    
                        })
                    }
                   </div>
               

               
            </>
        )
    }



    return ( 
        <div id='promotion'>
         {
            images([pic2,pic1,pic3])
         }

        </div>
         )

}

export default Promotion