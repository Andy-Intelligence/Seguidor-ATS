"use client"
import Link from 'next/link';
import {FiLink2} from 'react-icons/fi'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from 'react';


interface SearchProp{
  onSearch?:(searchQuery: string)=>void;
}


const Navbar = ({onSearch}:SearchProp) => {


// const [query,setQuery] = useState<any>()

// const handleInput = (event:any)=>{
//   setQuery(event?.target?.value)
// }


// const filteredItems = items?.filter((items:any)=>{
//   items?.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
// })
const [searchQuery, setSearchQuery] = useState<string>('');

const handleSearch = (event: any) => {
  const query = event.target.value;

  if (onSearch) {
    onSearch(query);
  }

  setSearchQuery(query);
};


  return (
    <nav className="navbar p-4 flex justify-between w-full items-center ">
      <div className="flex items-center gap-[47px] text-[16px] font-[400]">
        <Link href="/overview">
          <div>
            Overview
          </div>
          <svg width="63" height="8" viewBox="0 0 63 8" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M0 8C0 3.58172 3.58172 0 8 0H55C59.4183 0 63 3.58172 63 8H0Z" fill="#69A959"/>
          </svg>
        </Link>
        <Link className='flex flex-col items-center justify-center' href="/mailbox">
          <div>
            Mailbox
          </div>
          
        </Link>
        <Link href="/jobs/all">
          <div>
          Jobs
          </div>
          
        </Link>
      </div>
      <form className=' flex justify-center items-center  '>
        

          <div className='relative'>
          <div className='absolute left-[12px] top-[8px]'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#989898" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="#989898" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
          <input
            type="text"
            placeholder="I am looking for..."
            className="navbarSearchInput rounded-[4px] p-2 w-[400px] h-[40px] block pl-12 font-[500] text-[14px]"
            onChange={handleSearch}
          value={searchQuery}
          />
           {/* <button onClick={() =>{onSearch && onSearch(searchQuery)}}>Search</button> */}
          
        </div>
      </form>
      
      <div className="flex items-center space-x-4 ">
        {/* Icons */}
         <span>
            <svg width="37" height="29" viewBox="0 0 37 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 9.25V14.35C28 15.62 27.58 16.69 26.83 17.43C26.09 18.18 25.02 18.6 23.75 18.6V20.41C23.75 21.09 22.99 21.5 22.43 21.12L21.46 20.48C21.55 20.17 21.59 19.83 21.59 19.47V15.4C21.59 13.36 20.23 12 18.19 12H11.4C11.26 12 11.13 12.01 11 12.02V9.25C11 6.7 12.7 5 15.25 5H23.75C26.3 5 28 6.7 28 9.25Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.59 15.4V19.47C21.59 19.83 21.55 20.17 21.46 20.48C21.09 21.95 19.87 22.87 18.19 22.87H15.47L12.45 24.88C12 25.19 11.4 24.86 11.4 24.32V22.87C10.38 22.87 9.53 22.53 8.94 21.94C8.34 21.34 8 20.49 8 19.47V15.4C8 13.5 9.18 12.19 11 12.02C11.13 12.01 11.26 12 11.4 12H18.19C20.23 12 21.59 13.36 21.59 15.4Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="25" cy="7" r="6" fill="#69A959"/>
            </svg>
         </span>
        <span className="text-white">
          <svg width="37" height="29" viewBox="0 0 37 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.02 5.91C14.71 5.91 12.02 8.6 12.02 11.91V14.8C12.02 15.41 11.76 16.34 11.45 16.86L10.3 18.77C9.59003 19.95 10.08 21.26 11.38 21.7C15.69 23.14 20.34 23.14 24.65 21.7C25.86 21.3 26.39 19.87 25.73 18.77L24.58 16.86C24.28 16.34 24.02 15.41 24.02 14.8V11.91C24.02 8.61 21.32 5.91 18.02 5.91Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
          <path d="M19.87 6.2C19.56 6.11 19.24 6.04 18.91 6C17.95 5.88 17.03 5.95 16.17 6.2C16.46 5.46 17.18 4.94 18.02 4.94C18.86 4.94 19.58 5.46 19.87 6.2Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.02 22.06C21.02 23.71 19.67 25.06 18.02 25.06C17.2 25.06 16.44 24.72 15.9 24.18C15.36 23.64 15.02 22.88 15.02 22.06" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
          <circle cx="25" cy="7" r="6" fill="#69A959"/>
          </svg>
        </span>
        {/* Select Dropdown */}
        {/* <select className="bg-white rounded-lg p-2">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select> */}
      <Select>
        <SelectTrigger className="navBarSelect w-[15rem] p-1">
        <div className='flex items-center justify-between gap-[10px]'>
              <div>
                <img className='h-[36px] w-[36px] rounded-full' alt='profile-img' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'/>
              </div>
              <div className='flex flex-col'>
                <div className='text-[16px] text-left font-[400]'>Andidiong Usoro</div>
                <div className='text-[12px] font-[500] text-left'>usoroandidiong@gmail.com</div>
              </div>
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem className='w-full p-1' value="light">
          <div className='flex items-center justify-between gap-[10px]'>
              <div>
                <img className='h-[36px] w-[36px] rounded-full' alt='profile-img' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'/>
              </div>
              <div className='flex flex-col'>
                <div className='text-[16px] text-left font-[400]'>Andidiong Usoro</div>
                <div className='text-[12px] font-[500] text-left'>usoroandidiong@gmail.com</div>
              </div>
          </div>
          </SelectItem>  
          <SelectItem value="null1">null1</SelectItem>
          <SelectItem value="null2">null2</SelectItem>
        </SelectContent>
      </Select>

      </div>
    </nav>
  );
};

export default Navbar;
