// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import SearchApp from './SearchApp'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-router-dom'


const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
      setNav[!nav]
    }
  
  return (
    <div className='text-black justify-between flex items-center  px-5 py-4 h-36 max-w-[1240px] mx-auto bg-[#faf4fa]'>
     
                <h1 className=' text-2xl font-bold cursor-pointer sh'><Link to='/'><span className='text-red-500' >E</span>ventpalE</Link></h1>
                
                <ul className=' text-gray-500 font-[600] flex hidden lg:flex'  >
                       <li className=' px-3 cursor-pointer'> <Link to ='/local'>Local events</Link></li>
                       <li className=' px-3 cursor-pointer'> <Link to='/create'>Create event</Link> </li>
                       <li className=' px-3 cursor-pointer'><Link to='/blog'>Blog</Link></li>
                       <li className=' px-3 cursor-pointer'><Link to='/help'>Help center</Link></li>
               </ul>           

               <SearchApp/>   
          
               
                <button className='p-2 text-red-500 font-bold '>Login</button> 
                <button className='px-4 py-2 shadow-lg font-bold  bg-red-500 text-[white] text-[1em] rounded-full text-bold'>sign in</button>


      
      

   <div onClick={handleNav} className=' text-slate-500 cursor-pointer'> 
      {!nav ? <AiOutlineClose onClick={handleNav} size={30}/> : <AiOutlineMenu size={30}/> }
   </div>

   <div className={!nav ? 'fixed left-0 top-0  w-[60%] h-full border-r-red-900 bg-black ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
       <h1 className='w-full pt-12 pl-4 text-3xl font-bold text-white'><span className='text-[#f36c6c]' >E</span>ventpal</h1>
      <ul className='pt-12 text-white uppercase font-[300]'  >
         <li className='p-4 border-b border-gray-500'>Local event</li>
         <li className='p-4 border-b border-gray-600'>Create event</li>
         <li className='p-4 border-b border-gray-600'>Blog</li>
         <li className='p-4 border-b border-gray-600'>Help centre</li>
      </ul>
   </div>
   
    </div>
  )
}

export default Navbar
