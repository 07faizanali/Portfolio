import React from 'react'
import "./Hero.css"

import  DownloadForOfflineIcon  from '@mui/icons-material/DownloadForOffline';

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h5  id='aboutme'>About Me</h5>
            <p> 
               <h2>Faizan Ali</h2> I am from Delhi. I did my graduation in <span style={{ color:'#eec53f', fontFamily:'cursive'}}>Bachelor of Computer Appplication </span> degree with a commendable <span style={{color:'#eec53f', fontFamily:'cursive' }}>58.4%</span> score  from Indira Gandhi National Open University, Delhi.
               Currently I am pursuing <span style={{ color:'#eec53f', fontFamily:'cursive'}}>Master's in Computer Application</span> also from Indira Gandhi National Open University, Delhi.
               <span style={{ color:'#eec53f', fontFamily:'cursive'}}> Short Term Goal:</span> is to get a job in a reputed company in which I can grow my working skill and get more and more knowledge which help in my future bright.
               <span style={{ color:'#eec53f', fontFamily:'cursive'}}> Long Term Goal:</span> is to beacome a more responsible and knowledgeable personality and achieve a good position in Developer in the organization. I am passionate about leveraging technology to solve complex problems
               and eager to embark on this journey of professional growth and accomplishment.
                <br/><br/>
                <a href='Faizan_ali_cv.pdf' download='Faizan_ali_cv.pdf' className='download-btn'> <DownloadForOfflineIcon/> Resume</a> 
        </p>
        
            
        </div>

        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src='./photos/favicon.ico' alt='' />
                </div>
                <img src='./photos/my4.jpg' alt='' />
                <div className='tech-icon'>
                    <img src='./photos/sql.png' alt='' />
                </div>
                
                </div>


            <div>
                <div className='tech-icon'>
                    <img src='./photos/html.png' alt='' />
                </div>

                <div className='tech-icon'>
                    <img src='./photos/css1.png' alt='' />
                </div>

                <div className='tech-icon'>
                    <img src='./photos/js.png' alt='' />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Hero