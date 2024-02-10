import React from 'react'
import './ContactForm.css'
import emailjs from 'emailjs-com'

const ContactForm = () => {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_dwfgjmb', 'template_fipiwkm', e.target, 'PtWUFLRrUlfwXiOZk').then(res=>{
      console.log(res)
    }).catch(err=> console.log(err))
  }
  return (


    <div className='contact-form-content'>
        <form onSubmit={sendEmail}>
            <div className='name-container'>
                <input type='text' name='name' placeholder='Full Name' />
                <input type='text' name='subject' placeholder='Subject' />
            </div>
            <input type='email' name='user-email' placeholder='email@gmail.com' />
            <textarea type='text' name='message' placeholder='message' rows={5} />
            <button>Send</button>
        </form>
    </div>
  )
}



export default ContactForm