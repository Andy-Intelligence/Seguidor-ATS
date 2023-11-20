'use-client'
import Image from "next/image";
import searchImage from '../images/search-normal.svg'
import searchNormal from '../images/searchNormal.svg';
import { useState } from "react";
const Search = () => {


  const [search, setSearch] = useState(searchImage);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(searchNormal)
  }
  return (



    <div className="flex items-center justify-center">
      {/* <input
        type="search"
        id="search"
        placeholder="Search..."
        onChange={handleChange}
        className=" moverPlaceholder relative mt-3 ml-6"
      />
      <Image src={search} width={30} className="main-image" alt="search" height={100} quality={100} />
       */}
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
            onChange={handleChange}
          // value={searchQuery}
          />
           {/* <button onClick={() =>{onSearch && onSearch(searchQuery)}}>Search</button> */}
          
        </div>
    </div>
  );
};

export default Search;
