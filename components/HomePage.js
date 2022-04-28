import styles from '../styles/Home.module.css';
import LetsTalkBtn from './LetsTalkBtn';
import BookAMeetingBtn from './BookAMeetingBtn';
import NavBar from './NavBar';
import Image from 'next/image';
import HomePic from '../assets/images/homePicture.jpg';
import HowItWorks from './HowItWorks/index';
import HowItWorksMobile from './HowItWorks/mobile';
import About from './About';
import PeopleBehindUs from './PeopleBehind';
import LetsTalk from './LetsTalk';
import Footer from './Footer';
import {useRef, useState} from 'react';
import useWindowDimensions from './Hooks/index';
import MobileNavBar from './NavBar/mobile';

const HomePage = () => {
const {width} = useWindowDimensions();
const home = useRef();
const contact = useRef();
const [openNav, setOpenNav] = useState(false);



const homeClickHandler = () => {
    home.current.scrollIntoView({ behavior: 'smooth' });
    setOpenNav(false);
}

const aboutClickHandler = () => {
    const id = 'about';
    const yOffset = -80; 
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'})
    setOpenNav(false);
}

const contactClickHandler = () => {
    contact.current.scrollIntoView({ behavior: 'smooth' });
    setOpenNav(false);
}

const howItWorksClickHandler = () => {
    const id = 'howItWorks';
    const yOffset = -80; 
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'})
    setOpenNav(false);
}

const openNavBar = () => {
    setOpenNav(!openNav);
};

// const font = <style>
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
// </style>

    return (
       <div ref={home} className={styles.font}>
           <NavBar
                logoClick={homeClickHandler}
                homeClick={homeClickHandler}
                aboutClick={aboutClickHandler}
                howItWorksClick={howItWorksClickHandler}
                contactClick={contactClickHandler}
                letsTalk={contactClickHandler}
                openNavBar={openNavBar}
           />
           {width < 600 && openNav && <MobileNavBar
                homeClick={homeClickHandler}
                aboutClick={aboutClickHandler}
                howItWorksClick={howItWorksClickHandler}
                contactClick={contactClickHandler}
           />}
           <div className={styles.appContainer}>
                <div className={styles.homeSection}>
                    <div className={styles.homeSectionWidth}>
                        <div>
                            <h1 className={styles.title}><span className={styles.newColor}>Furtherance</span> helps you find the right partner to go further in your business</h1>
                        </div>
                        <div>
                            <p className={styles.subtitle}>
                                Furtherance is an organization that helps you connect with relevant experts and outsource agencies based on your
                                current business challenges
                                If you need to fill organizational gaps in marketing, sales, HR, finance or anything else, Furtherance is here.
                            </p>
                        </div>
                        <div className={styles.buttonSection}>
                            <LetsTalkBtn onLetsTalkClick={contactClickHandler}/>
                            <BookAMeetingBtn />
                        </div>
                    </div>
                    {width > 400 && <div style={{width: '60%'}}>
                        <Image
                            src={HomePic}
                            alt='Home picture'
                        />
                    </div>}
                </div>
                {width > 600 && <div id='howItWorks'>
                    <HowItWorks />
                </div>}
                {width < 600 && <div id='howItWorks'>
                    <HowItWorksMobile />
                </div>}
           </div>
           <div id='about' >
                <About />
           </div>
           <div className={styles.successStory}>
                <h1>Do you want to be our next success story?</h1>
                <LetsTalkBtn style={{marginRight: '0px'}} onLetsTalkClick={contactClickHandler}/>
            </div>
            <PeopleBehindUs />
            <div ref={contact}>
                <LetsTalk />
            </div>
            <Footer />
       </div>
    );
};

export default HomePage;
