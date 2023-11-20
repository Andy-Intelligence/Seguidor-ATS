'use client'
import Footer from "../comps/Footer/Footer";
import Nav from "../comps/Nav";
import ListOfJobs from "./ListOfJobs";
const Page = () => {
    
  return (
    <div>
      <Nav />
      <div className=" p-3 components">
        <ListOfJobs
          jobberTitle="Graphics Designer"
          jobber="We need a graphics designer who knows how to use corel draw, Figma and web design"
          deadline="10/12/2023"
          handleClick={() =>{
            localStorage.setItem('title', jobberTitle)
          }}
        />
        <ListOfJobs
          jobberTitle="Junior Front-end Developer"
          jobber="We need a junior frontend developer who knows how to write HTML,CSS and JavaScript"
          deadline="10/12/2023"
          handleClick={() =>{
            localStorage.setItem('title', jobberTitle)
          }}
        />

        <ListOfJobs
          jobberTitle="Senior Front-end Developer"
          jobber="We need a junior frontend developer who knows how to write HTML,CSS and JavaScript"
          deadline="10/12/2023"
          handleClick={() =>{
            localStorage.setItem('title', jobberTitle)
          }}
        />
        <ListOfJobs
          jobberTitle="Senior Agba Front-end Developer"
          jobber="We need a junior frontend developer who knows how to write HTML,CSS and JavaScript"
          deadline="10/12/2023"
          handleClick={() =>{
            localStorage.setItem('title', jobberTitle)
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
