import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (

    <section className='contact-container'>
      <h5>ContactMe</h5>

      <div className='contact-content'>
        <div style={{ flex:1 }}>
            <ContactInfoCard
            iconUrl="./photos/icon-gmail.gif"
            text="mohd.faizanali.m.z@gmail.com"
            />
            <ContactInfoCard
            iconUrl="./photos/github.png"
            text="https://github.com/07faizanali"
            />
        </div>
        <div style={{ flex:1 }}>
            <ContactForm/>
        </div>
      </div>
      </section>
 )
}

export default ContactMe