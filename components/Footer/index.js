import styles from '../../styles/Home.module.css';
import useWindowDimensions from '../Hooks/index';

const Footer = () => {
    const {width} = useWindowDimensions();
    return (
        <div className={styles.footer}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{paddingTop: '5px', marginRight: '15px'}}>
                    <img
                        src={'/images/logo.svg'}
                        alt={'footer logo'}
                        style={{width: '100%'}}
                    />
                </div>
                <div>
                    <span>Contact</span>
                    <span className={styles.footerBlockDisplay}>+381 64 1015 514</span>
                </div>
            </div>
            {width > 600 && <div>
                © 2022 All rights reserved by Furtherance 
            </div>}
            <div className={styles.footerDiv}>
                <div style={{marginRight: '35px'}}>
                    <span className={styles.mail} onClick={() => window.location = 'mailto:vladislav.pavlov@furtherance.rs'}>vladislav.pavlov@furtherance.rs</span>
                    <span className={styles.footerBlockDisplay}>Serbia, Belgrade</span>
                </div>
                <div>
                    <a 
                     href='https://www.linkedin.com/in/vladislav-pavlov-461464144/'
                     target="_blank"
                     rel="noopener noreferrer">
                       <img
                        src={'/images/ln.logo.svg'}
                        alt={'little ln logo'}
                        style={{width: '100%'}}
                    /> 
                    </a>
                    
                </div>
            </div>
            {width < 600 && <div>
                © 2022 All rights reserved by Furtherance 
            </div>}
        </div>
    );
};

export default Footer;