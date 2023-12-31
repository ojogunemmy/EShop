import React,{useState,createContext,Dispatch,CSSProperties} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
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
import ForgotPassword from '../Pages/ForgotPasswordPage';
import AboutUsPage from '../Pages/AboutUsPage';
import { AiFillQuestionCircle } from 'react-icons/ai';
import SpecificsPage from '../Pages/SpecificsPage';
import {AiOutlineHome} from 'react-icons/ai'
import {BiCategory,BiSolidUserAccount} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import {BiLogOut,BiLogIn} from 'react-icons/bi'



//Cart type
interface Cart{
  pn:string,
  pp:number,
  pq:number,
  pc:string,
  ps:string,
  pid:string

}
interface CartProduct{
  cart:Cart[],
  setCart:Dispatch<React.SetStateAction<Cart[]>>
}

//Login type
interface IsLoggedIn{
  isLoggedIn:Login,
  setIsLoggedIn:Dispatch<React.SetStateAction<Login>>
}
interface Login{
  name:string,
  id:string,
  status:boolean
}

//Curret page type
interface Current{
  currentPage:string,
  setCurrentPage:Dispatch<React.SetStateAction<string>>
}

//Side Navigation type
interface sideNav{
  side:boolean,
  setSide:Dispatch<React.SetStateAction<boolean>>
}

//Exported context available to all routes Global scope the name defines the action
export const SideNavBar = createContext<sideNav>({
  side:false,
  setSide:()=>{}
})
export const CurrentState = createContext<Current>({
  currentPage:'',
  setCurrentPage:()=>{}
})

export const AuthenticationStatus= createContext<IsLoggedIn>({
  isLoggedIn:{name:'',id:'',status:false},
  setIsLoggedIn:()=>{}
})
export const CartListNumber= createContext<CartProduct>({
  cart:[],
  setCart:()=>{}
})

// Main File that holds the routes for the various frontend view.
function App() {

  //Global use states for sidebar on mobile view ,Login confirmation, products in the cart provided globally, Current Page open
  const [side,setSide] = useState<boolean>(false)
  const [isLoggedIn,setIsLoggedIn] = useState<Login>({name:'',id:'',status:false})
  const [cart,setCart] = useState<Cart[]>([])
  const [currentPage,setCurrentPage] = useState<string>('')

function Render(){

  if(side===true){
    return 'side'
  }else{

    return 'hideSide'

  }
  


}

window.addEventListener('resize',()=>{
  setSide(false)
})


const mg:CSSProperties = {marginRight:'var(--margin)'}
  
  return (
 
  <BrowserRouter>
  <CurrentState.Provider value={{currentPage,setCurrentPage}}>
  <CartListNumber.Provider value={{cart,setCart}}>
  <SideNavBar.Provider value={{side,setSide}}>
  <AuthenticationStatus.Provider value={{isLoggedIn,setIsLoggedIn}}>
    <div className={Render()}>
      <div style={{display:'flex',justifyContent:'flex-start',flexDirection:'column',alignItems:'flex-start',width:'100%',padding:'var(--padding)',height:'100%'}}>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',width:'100%',height:'120px'}}>
        <MdAccountCircle size={90} style={{height:'100%',width:'100%'}} />
        </div>

        {/* side navigations are  Home, Category, Account, Settings, Logout or Login */}

        <SideNavigation  type="Route" LinkName="HOME" icon={<AiOutlineHome size={24} style={mg} color={'white'} />} to="/"/>
        <SideNavigation  type="Route" LinkName="CATEGORY" icon={<BiCategory size={24} style={mg} color='white'/>} to="/Category"/>
        <SideNavigation  type="Route" LinkName="ACCOUNT" icon={<BiSolidUserAccount size={24} style={mg} color='white'/>} to="/Account"/>
        <SideNavigation  type="Route" LinkName="SETTINGS" icon={<FiSettings  size={24} style={mg} color='white'/>} to="/Settings"/>

        {
        isLoggedIn.status === true?<SideNavigation  type="Action" LinkName="LOG OUT" icon={<BiLogOut style={mg} size={24} color='white'/>}/>:<SideNavigation  type="Route" LinkName="SIGN IN" icon={<BiLogIn size={24} style={mg} color='white'/>} to="/Signin"/>
        }
    </div>
    </div>
    {/* All the routes specified it controls the presentation */}
    <div className='container'>
     <Header account='Account' />
     <div id='content'>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/EShop' element={<Home/>} ></Route>
        <Route path='*' element={<NotFound/>} ></Route>
        <Route path='/Signup'  element={<SignupPage/>} ></Route>
        <Route path='/Signin'  element={<SigninPage/>} ></Route>\
        <Route path='/MoreDetails'  element={<ProductFullDatails/>} ></Route>
        <Route path='/Forgot'  element={<ForgotPassword/>} ></Route>
        <Route path='/About'  element={<AboutUsPage current={currentPage}/>} ></Route>
        <Route path='/Specifics'  element={<SpecificsPage/>} ></Route>
        <Route path='/Cart'  element={<CartList/>} ></Route>
        <Route path='/Category'  element={<SpecificsPage/>} ></Route>
        <Route path='/Account'  element={<SpecificsPage/>} ></Route>
        <Route path='/Settings'  element={<SpecificsPage/>} ></Route>
        
      </Routes>
     </div>
     <Footer/>
     <Copyright/>
     <a href="mailto:ojogunemmy@gmail.com"><AiFillQuestionCircle size={25} color='var(--info)' className='question'/></a>

   </div>
   </AuthenticationStatus.Provider>
   </SideNavBar.Provider>
   </CartListNumber.Provider>
   </CurrentState.Provider>
   </BrowserRouter>
    
  );
}

export default App;
