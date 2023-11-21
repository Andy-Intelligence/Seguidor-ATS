import Navbar from "@/components/sharedComponents/Navbar";
// import Header from "./comps/Header";
const NotFound = () => {
  return (
    <main>
      <div>
        <Navbar />
        <div className="message">
          <h1 className=" text-center font-bold text-2xl">Hello, There!</h1>
          <p className=" text-center">
            We are working on this feature please stick with us 😉😉
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
