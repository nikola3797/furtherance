import styles from '../../../styles/Home.module.css';
import Image from 'next/image';
import LinkedInLogo from '../../../assets/images/ln.logo.svg';
import Logo from '../../../assets/images/logo.svg';
import useWindowDimensions from '../Hooks/index';

const Footer = () => {
    const {width} = useWindowDimensions();
    return (
        <div className={styles.footer}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{paddingTop: '5px', marginRight: '15px'}}>
                    <Image src={Logo}/>
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
                    <Image src={LinkedInLogo}/>
                </div>
            </div>
            {width < 600 && <div>
                © 2022 All rights reserved by Furtherance 
            </div>}
        </div>
    );
};

export default Footer;