
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';


const ContactMe = () => {


  const form = useRef();

  const sendEmail = (e) => {
    console.log(form)
    e.preventDefault();
    
   
    emailjs
      .sendForm('service_uosf8sf', 'template_q5ucuha', form.current, {
        publicKey: 'oX1Ve66vTD1NsQK02',
      })
      .then(
        () => {
          toast.success('Your Message has been sent successfully!')
          console.log('SUCCESS!');
      
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast(error.text)
        },
      );
   
     e.target.reset()
  };


 
  return (
    <div id="contact" >
   
  
      <section className="bg-gray-100 dark:bg-gray-900   ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16  text-center font-semibold text-gray-500 dark:text-gray-400 sm:text-xl">
            "Unlock the gateway to connection drop me a line!"
          </p>
          <form ref={form} onSubmit={sendEmail}  className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="You Name"
                required
               
          
              />
            </div>
            <div>
              <label
               htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Xyz@gmail.com"
                required
               
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                name="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border dark:text-white"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
