import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experience That inspire</h2>
            <p> Passionate  Frontend Developer | Transform Ideas Into Seamless and
                visually Stunning Web Solutions.
            </p>
        </div>

        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src='./photos/favicon.ico' alt='' />
                </div>
                <img src='./photos/my1.jpg' alt='' />
                </div>


            <div>
                <div className='tech-icon'>
                    <img src='./photos/html.png' alt='' />
                </div>

                <div className='tech-icon'>
                    <img src='./photos/css1.png' alt='' />
                </div>

                <div className='tech-icon'>
                    <img src='./photos/js1.gif' alt='' />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Hero