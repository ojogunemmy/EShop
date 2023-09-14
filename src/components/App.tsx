import React,{useState,createContext,Dispatch,useEffect} from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from '../Pages/HomePage'
import NotFound from '../Pages/NotFoundPage';
import SignupPage from '../Pages/SignupPage';
import SigninPage from '../Pages/SigninPage'
import ProductFullDatails from '../Pages/ProductClickPage';
import CartList from '../Pages/CartPage';
import Header from './common/Header';
import Footer from './common/Footer';
import Copyright from './common/Copyright';
import { MdAccountCircle } from 'react-icons/md';
import  { SideNavigation } from './Navigation';
import Product from './Product';
import ForgotPassword from '../Pages/ForgotPasswordPage';
interface IsLoggedIn{
  isLoggedIn:boolean,
  setIsLoggedIn:Dispatch<React.SetStateAction<boolean>>
}

interface sideNav{
  side:boolean,
  setSide:Dispatch<React.SetStateAction<boolean>>
}
interface CartProduct{
  cart:{}[],
  setCart:Dispatch<React.SetStateAction<{}[]>>
}
export const SideNavBar = createContext<sideNav>({
  side:false,
  setSide:()=>{}
})

export const AuthenticationStatus= createContext<IsLoggedIn>({
  isLoggedIn:false,
  setIsLoggedIn:()=>{}
})
export const CartListNumber= createContext<CartProduct>({
  cart:[],
  setCart:()=>{}
})

function App() {
  const [side,setSide] = useState<boolean>(false)
  const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)
  const [cart,setCart] = useState<{}[]>([])

  

  


function Render(){

  if(side===true){
    return 'side'
  }else{

    return 'hideSide'

  }
  


}

function clickMenu(event:React.MouseEvent<HTMLAnchorElement,MouseEvent>){
  if(side === false){ 
      setSide(true)
  }else{
      setSide(false)
     
  }
  
}

window.addEventListener('resize',()=>{
  setSide(false)
})

  



  return (
 
  <BrowserRouter>
  <CartListNumber.Provider value={{cart,setCart}}>

  <SideNavBar.Provider value={{side,setSide}}>

<AuthenticationStatus.Provider value={{isLoggedIn,setIsLoggedIn}}>

  
    <div className={Render()}>
      <div style={{display:'flex',justifyContent:'flex-start',flexDirection:'column',alignItems:'flex-start',width:'100%',padding:'var(--padding)',height:'100%'}}>

        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',width:'100%',height:'120px'}}>
        {
        isLoggedIn===true?  <MdAccountCircle size={90} style={{height:'100%',width:'100%'}} />:<Link to={"/Signin"} className='sideButtons' onClick={(e)=>clickMenu(e)}> Sign in</Link>
        
        }

        </div>
      
     <SideNavigation  type="Route" LinkName="Home" to="/"/>
     <SideNavigation  type="Route" LinkName="Category" to="/Category"/>
     <SideNavigation  type="Route" LinkName="Account" to="/Account"/>
     <SideNavigation  type="Route" LinkName="Settings" to="/Settings"/>
     <SideNavigation  type="Action" LinkName="Logout" to="/Category"/>





      </div>
      



     

    </div>




 
 <div className='container'>
  
    <div id='navbar'>
       <Header account='Account' />
    </div>

    

    <div id='content'>
    

      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/ESHOP' element={<Home/>} ></Route>
        <Route path='*' element={<NotFound/>} ></Route>
        <Route path='/Signup'  element={<SignupPage/>} ></Route>
        <Route path='/Signin'  element={<SigninPage/>} ></Route>\
        <Route path='/MoreDetails'  element={<ProductFullDatails/>} ></Route>
        <Route path='/Forgot'  element={<ForgotPassword/>} ></Route>
        <Route path='/Cart'  element={<CartList/>} ></Route>
      </Routes>
         
     </div>

    

   
     <Footer/>
     <Copyright/>
   

   </div>
 

  
 </AuthenticationStatus.Provider>


</SideNavBar.Provider>


  </CartListNumber.Provider>
   </BrowserRouter>
    
  );
}

export default App;
