import styles from '../../styles/Home.module.css';
import LetsTalkBtn from '../LetsTalkBtn/index';
import Image from 'next/image';
import Logo from '../../assets/images/full-logo.svg';
import useWindowDimensions from '../Hooks/index';
import navMenu from '../../assets/images/nav.menu.png';
import miniLogo from '../../assets/images/miniLogo.png';


const NavBar = (props) => {
   const {width} = useWindowDimensions();

    
    return (
        <nav className={styles.navBar}>
            {width > 600 && <div onClick={props.logoClick}>
                <span className={styles.logo}>
                    <Image src={Logo}/>
                </span>
            </div>}
            {width < 600 && <div onClick={props.logoClick}>
                <span className={styles.logo}>
                    <Image src={miniLogo}/>
                </span>
            </div>}
            {width < 600 ? null : <div>
                <a onClick={props.homeClick} className={styles.link}>Home</a>
                <a onClick={props.howItWorksClick} className={styles.link}>How It Works</a>
                <a onClick={props.aboutClick} className={styles.link}>Use Case</a>
                <a onClick={props.contactClick} style={{paddingRight: '0px'}} className={styles.link}>Contact</a>
            </div>}
            {width < 600 ?
            <div>
                <span style={{marginRight: '15px'}}>
                    <a onClick={props.letsTalk} style={{marginRight: '10px'}} className={styles.link}>Lets Talk</a>
                    <Image onClick={props.openNavBar} src={navMenu} style={{cursor: 'pointer'}}/>
                </span>
            </div> : <div>
                <LetsTalkBtn onLetsTalkClick={props.letsTalk}/>
            </div>}
        </nav>
    );
};

export default NavBar;
