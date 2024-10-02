
import image from '../assets/images/logo.png';
import scroll from '../assets/images/mscroll.png'
import im from '../assets/images/Card.png'
import im1 from '../assets/images/Ellipse 26.png'
import im2 from '../assets/images/Ellipse 27.png'
import im3 from '../assets/images/Ellipse 28.png'
import './home.css';

function Home() {
   return (
      <>
         <div className='home-page'>
            <div className='header'>
               <div className='left-header'>
                  <a href=''>What we Belive</a>
                  <a href=''>Our Feature</a>
               </div>
               <div className='right-header'>
                  <a href=''>Our Story</a>
                  <a href=''>The Waitlist</a>
               </div>
            </div>
            <div className='main'>
               <img src={image} alt='logo' />
               {/* <p>Unlock Seamless Efficiency</p> */}
               <button>join Waitlist</button>

            </div>
            <div className='scroll'>
               <img src={scroll} alt='scroll to bottom' />
               <p>Scroll Down</p>
            </div>
            {/* <div className='one'>
               <img src={im} alt='card image' />
            </div> */}
            {/* <div className='two'>
               <p className='first'>Next-To-Do</p>
               <p className='second'>Renew Card insurance</p>
            </div> */}
            {/* <div className='three'>
               <p> Car Insurance</p>
            </div> */}
            <div className='four'>
               {/* <div className='four-img'>
                  <img className='im1' src={im1} alt='one' />
                  <img className='im2' src={im2} alt='two' />
                  <img className='im3' src={im3} alt='Three' />
               </div> */}
               {/* <div className='four-p'>
                  <p>Upcoming Events</p>
                  <p>Kite Beach</p>
                  <i></i>
                  <p>10:00-14:00</p>
               </div> */}

               {/* left to doooo */}



            </div>

         </div>
      </>


   )
}

export default Home