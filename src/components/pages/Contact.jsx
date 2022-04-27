import React, { useRef, useState, useEffect } from 'react';
import data from '../data/contact.json';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [ done, setDone ] = useState(false);
    const [ contactList, setContactList ] = useState([]);

    const submit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_bzjefak', 'template_xdshwpk', useRef.current, 'UYCKvhfSpH8j3ZHnE').then((result) => {
            console.log('result => ', result.text);
            setDone(true);
        },(error) => {
            console.log(error.text);
        })
    };

    useEffect(() => {
        setContactList(data.contact);
    }, []);

  return (
    <div>
        <section id='contact'>
            <div className='contact-background'></div>
            <h1 className='contact-title'>Contact</h1>
            <hr className='w-25 mx-auto' />
            <div className='contact-wrapper container'>
                    <div className='left-content'>
                        {contactList.map((contact, index) => {
                            return(
                            <div className='contact-info' key={index}>
                                <div className='information'>
                                    <img src={contact.image} alt={contact.name} className='contact-icon' /> 
                                    {contact.information}
                                </div>
                            </div>
                            )
                        })}
                    </div>
                    <div className='right-content'>
                        <p className='contact-description'>
                            If you have a <b>question</b> please fill out the form below.
                        </p>
                        <form ref={formRef} onSubmit={submit}>
                            <input type='text' placeholder='Your Name' name='user_name' />
                            <br />
                            <input type='text' placeholder='Subject' name='user_subject' />
                            <br />
                            <input type='text' placeholder='Your Email' name='user_email' />
                            <textarea rows={5} placeholder='Typing Here..' name='message' />
                            <button className='btn btn-outline ms-auto px-4 rounded-pill contact-button'>Submit</button>
                            {done && "submited!"}
                        </form>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Contact