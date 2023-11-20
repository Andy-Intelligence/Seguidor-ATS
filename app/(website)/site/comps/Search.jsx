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



    <>
      <input
        type="search"
        id="search"
        placeholder="Search..."
        onChange={handleChange}
        className=" moverPlaceholder relative mt-3 ml-6"
      />
      <Image src={search} width={30} className="main-image" alt="search" height={100} quality={100} />
      
    </>
  );
};

export default Search;
