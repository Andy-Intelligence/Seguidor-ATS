const ContactForm = () => {
  return (
    <div className="w-full contactForm p-20">
      <div className="flex flex-col gap-2 w-full">
        <h2 className=" text-black mb-6 text-center font-bold">Reach Out To Us</h2>
        <input type="text" placeholder="Company Name" className=" border   bg-white" />
        <input type="email" placeholder="Company Email" className=" bg-white border border-none p-9 " />
        <textarea placeholder="Write Here" cols="44" rows="5" className="ta mb-4 border border-none w-full p-9"></textarea>
        <input type="submit" value="Send" className="contact text-white px-9 w-full" />
      </div>
    </div>
  );
};

export default ContactForm;
