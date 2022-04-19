import styles from '../../../styles/Home.module.css';
import useWindowDimensions from '../Hooks/index';
import Image from 'next/image';
import Uki from '../../../assets/images/uki.jpg';
import Paja from '../../../assets/images/paja.jpeg';
import Nikola from '../../../assets/images/nikola.samardzija.jpg';
import BlueLnLogo from '../../../assets/images/ln.svg';
import German from '../../../assets/images/german.png';
import Serbia from '../../../assets/images/serbia.png';




const About = () => {
    const {width} = useWindowDimensions();
    return (
        <div className={styles.about}>
            <h1 className={styles.aboutTitle}>What other people say about us</h1>
            <div className={styles.profileContainer}>
                <div className={styles.profile}>
                    <div className={styles.profileSubtext}>
                        <Image src={Paja} />
                        <div className={styles.profileTextSection}>
                            <div>'Dintegra is a software company in the industrial engineering space, and the challenge we faced was building a small dev team in a matter of months, to satisfy the requirements of a big project. Furtherance has helped us find the right people and open up a development team in Serbia, and gave us strategic insights into how we can develop our business further.'</div>
                            <div className={styles.profileText}>
                                <div className={styles.profileTextTitle}>Pavle Andjelkovic</div>
                                <a style={{textDecoration: 'underline'}} href='https://www.dintegra.io/' target='_blank' rel='noopener noreferrer'>Dintegra</a>
                                <div className={styles.profileLnSection}>
                                    <a style={{marginRight: '10px'}} href='https://www.linkedin.com/in/pavle123/' target='_blank' rel='noopener noreferrer'>
                                        <Image src={BlueLnLogo} />
                                    </a>
                                    <Image src={German} height='30px' width='30px'/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div><br/>
                <div className={styles.profile}>
                    <div className={styles.profileSubtext}>
                        <Image src={Uki} />
                        <div className={styles.profileTextSection}>
                            <div>'Beohost is a proptech startup, and we needed help in creating and launching a new software product. Furtherance helped us find the right software development agency,
                                with whom we were able to build a product from scratch and launch it in a couple of months.'</div>
                            <div className={styles.profileText}>
                                <div className={styles.profileTextTitle}>Uros Djakovic</div>
                                <a style={{textDecoration: 'underline'}} href='https://beohost.rs/' target='_blank' rel='noopener noreferrer'>Beohost</a>
                                <div className={styles.profileLnSection}>
                                    <a style={{marginRight: '10px'}} href='https://www.linkedin.com/in/urosdjakovic/' target='_blank' rel='noopener noreferrer'>
                                        <Image src={BlueLnLogo} />
                                    </a>
                                    <Image src={Serbia} height='30px' width='30px'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br/>
                <div className={styles.profile}>
                    <div className={styles.profileSubtext}>
                        <Image src={Nikola} />
                        <div className={styles.profileTextSection}>
                            <div>'Skenit is a startup focused on the fitness industry, and we had lots of challenges at the beginning. Furtherance helped us on different aspects of our business. They connected us with a sales mentor who helped us refine and structure our sales strategy, and they connected us with various experts in the industry.'</div>
                            <div className={styles.profileText}>
                                <div className={styles.profileTextTitle}>Nikola Samardzija</div>
                                <a style={{textDecoration: 'underline'}} href='https://skenit.com/' target='_blank' rel='noopener noreferrer'>Skenit</a>
                                <div className={styles.profileLnSection}>
                                    <a style={{marginRight: '10px'}} href='https://www.linkedin.com/in/nikolasamardzija5/' target='_blank' rel='noopener noreferrer'>
                                        <Image src={BlueLnLogo} />
                                    </a>
                                    <Image src={Serbia} height='30px' width='30px'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br/>
            </div>
        </div>
    );
};

export default About;