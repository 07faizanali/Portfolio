import React from 'react'
import './ContactForm.css'


const ContactForm = () => {
  return (


    <div className='contact-form-content'>
        <form>
            <div className='name-container'>
                <input type='text' name='first name' placeholder='first name' />
                <input type='text' name='last name' placeholder='last name' />
            </div>
            <input type='email' name='email' placeholder='email@gmail.com' />
            <textarea type='text' name='message' placeholder='message' rows={3} />
            <button>Send</button>
        </form>
    </div>
  )
}



export default ContactForm