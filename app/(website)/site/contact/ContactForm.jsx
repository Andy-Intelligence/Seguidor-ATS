const ContactForm = () => {
  return (
    <div className=" bg-white contactForm p-20">
      <div>
        <h2 className=" text-black mb-6 text-center font-bold">Reach Out To Us</h2>
        <input type="text" placeholder="Company Name" className=" border  border-black bg-white" />
        <input type="email" placeholder="Company Email" className=" bg-white border  border-black" />
        <textarea placeholder="Write Here" cols="44" rows="5" className=" border border-black p-9"></textarea>
        <input type="submit" value="Send" className="contact text-white px-9" />
      </div>
    </div>
  );
};

export default ContactForm;
