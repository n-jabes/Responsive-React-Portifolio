import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('nshtui42@123', 'template_9bfxtfb', form.current, 'user_x5r7bv1jDxyqRn2fD5gsi')

    // This is to remove everything from the form after the msg was sent
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-item'/>
            <h4>Email</h4>
            <h5>nshutij7@gmail.com</h5>
            <a href="mailto:nshutij7@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-item'/>
            <h4>Messenger</h4>
            <h5>Nshuti Jabes</h5>
            <a href="https://www.facebook.com/nshuti.jabes.3" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-item'/>
            <h4>Whatsapp</h4>
            <h5>nshutij7@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone=+250784593206" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact