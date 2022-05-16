import styles from '../../styles/Home.module.css';
import LetsTalkBtn from '../LetsTalkBtn/index';
import useWindowDimensions from '../Hooks/index';


const NavBar = (props) => {
   const {width} = useWindowDimensions();

    
    return (
        <nav className={styles.navBar}>
            {width > 600 && <div onClick={props.logoClick}>
                <span className={styles.logo}>
                    <img
                        src={'/images/full-logo.svg'}
                        style={{width: '100%'}}
                        alt={'full large logo'}
                    />
                </span>
            </div>}
            {width < 600 && <div onClick={props.logoClick}>
                <span className={styles.logo}>
                    <img 
                        src={'/images/miniLogo.png'}
                        style={{width: '100%'}}
                        alt={'mobile logo'}
                    />
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
                    <img
                        onClick={props.openNavBar}
                        src={'/images/nav.menu.png'}
                        style={{cursor: 'pointer'}}
                        alt={'navBar img'}
                    />
                </span>
            </div> : <div>
                <LetsTalkBtn onLetsTalkClick={props.letsTalk}/>
            </div>}
        </nav>
    );
};

export default NavBar;
