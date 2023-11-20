import Header from "./comps/Header";
const NotFound = () => {
  return (
    <main>
      <div>
        <Header />
        <div className="message">
          <h1 className=" text-center font-bold text-2xl">There was a problem...</h1>
          <p className=" text-center">
            We could not find the page you were looking for 😉😉
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
