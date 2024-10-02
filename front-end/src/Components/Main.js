

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import imone from '../assets/images/12.png'
import imtwo from '../assets/images/12.png'
import imthree from '../assets/images/12.png'
import imfour from '../assets/images/12.png'
import logo from '../assets/images/logo.png'
import middle from '../assets/images/middle.png'

import './main.css'

const paragraph = [
    ' What can curiosity, wonder, and awe do for you?',
    'Does Fluid AI increase wellbeing and meaning in life?',
    'What can curiosity, wonder, and awe do for you?',
    'Does Fluid AI increase wellbeing and meaning in life?',
    'What can curiosity, wonder, and awe do for you?',
    'Does Fluid AI increase wellbeing and meaning in life?',
    'What can curiosity, wonder, and awe do for you?',
]

function Main() {
    return (
        <>
            <div className='main-page'>
                <p className='one'>Our features</p>
                <p className='p-two'>Fluid AI was born out of a desire to simplify and streamline modern life</p>
                <div className='mobile'>
                    <div className='m-one'>
                        <div className='mm-one'>
                            <p className='mzero'>Fluid AI: Simplify, Organize, and Achieve More</p>
                            <p className='mneg'> In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
                        </div>
                        <div className='mmmm'>
                            <img className='imgo' src={imone} alt='m-one' />
                        </div>
                    </div>
                    <div className='m-one '>
                        <div></div>
                        <div className='mmmm'>
                            <img className='ttimgo' src={imtwo} alt='m-two' /></div>
                        <div className='mm-one'>
                            <p className='mzero'>Fluid AI: Simplify, Organize, and Achieve More</p>
                            <p className='mneg'> In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
                        </div>
                    </div>
                    <div className='m-one'>
                        <div className='mm-one'>
                            <p className='mzero'>Fluid AI: Simplify, Organize, and Achieve More</p>
                            <p className='mneg'> In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
                        </div>
                        <div className='mmmm'>
                            <img className='imgo' src={imthree} alt='m-three' /></div>
                    </div>

                    <div className='m-one'><div></div>
                        <img className='mmmm' src={imfour} alt='m-four' />
                        <div className='mm-one'>
                            <p className='mzero'>Fluid AI: Simplify, Organize, and Achieve More</p>
                            <p className='mneg'> In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
                        </div>


                    </div>
                    <p className='fluid'>Fluid AI was born out of a desire to simplify and streamline modern life</p>
                </div>

                <div className='time'>
                    <div className='both'>
                        <div className='upper'>
                            {/* <img src={ttone} alt='onee' /> */}
                            <p>Fluid has Internet access, so you can get up-to-date information from it.</p>
                        </div>
                        <div className='bottom'>
                            <p>Time fo work</p>
                        </div>
                    </div>


                </div>
                <div className='curosity'>
                    <div className='cu-left'>
                        <p className='cu-pone'>What can curiosity, wonder, and awe do for you?</p>
                        <p className='cu-ptwo'>esearch shows that experiencing curiosity and awe can immensely benefit our mental, physical, and professional health. Here’s a brief overview of what curiosity and awe can do for you.</p>
                    </div>

                    <div className='cu-right'>
                        {paragraph.map(para => (
                            <div className='right-cuo'>
                                <p>{para}</p>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>

                        ))}

                    </div>
                </div>
                <div className='middle'>
                    
                        <div className='inside'>
                        <p>Join The fluid AI</p>
                            <input type='text' placeholder='Name' />
                            <input type='email' placeholder='Email' />
                        </div>
                        <div className='middle-image'>
                            <img src={middle} alt='after' />
                        </div>
                   

                </div>

                <div className='footer'>
                    <div className='left'>
                        <img src={logo} alt='logo ' />
                        <p>2024 Fluid A</p>
                    </div>
                    <div className='right'>
                        <div className='right-one'>
                            <a href=''>Our Features</a>
                            <a href=''>Areas</a>
                            <a href=''>FAqs</a>
                            <a href=''>The Waitlist</a>
                            <a href=''>Contact Us</a>
                        </div>
                        <div className='right-two'>
                            <a href=''>Term of Service</a>
                            <a href=''>Privacy Policy</a>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Main