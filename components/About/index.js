import styles from '../../styles/Home.module.css';
import useWindowDimensions from '../Hooks/index';


const About = () => {
    const {width} = useWindowDimensions();
    return (
        <div className={styles.about}>
            <h1 className={styles.aboutTitle}>What other people say about us</h1>
            <div className={styles.profileContainer}>
                <div className={styles.profile}>
                    <div className={styles.profileSubtext}>
                        <img
                             src={'/images/pavleAndjelkovic.png'}
                             alt={'Slika paje'}
                             style={{width: '100%'}}
                        />
                        <div className={styles.profileTextSection}>
                            <div>&apos;&apos;Dintegra is a software company in the industrial engineering space, and the challenge we had was
                                 to build a small dev team in a matter of months. Furtherance
                                 helped us find the right people, open up a development team in Serbia, go further in our business.&apos;&apos;</div>
                            <div className={styles.profileText}>
                                <div className={styles.profileTextTitle}>Pavle Andjelkovic, Head of Biz.Dev</div>
                                <a style={{textDecoration: 'underline'}} href='https://www.dintegra.io/' target='_blank' rel='noopener noreferrer'>Dintegra</a>
                                <div className={styles.profileLnSection}>
                                    <a style={{marginRight: '10px'}} href='https://www.linkedin.com/in/pavle123/' target='_blank' rel='noopener noreferrer'>
                                        <img
                                            src={'/images/ln.svg'}
                                            alt={'LN logo'}
                                            style={{width: '100%'}}
                                        />
                                    </a>
                                    <img
                                        src={'/images/german.png'}
                                        alt={'zastava nemacke'}
                                        style={{width: '15%'}}
                                    />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div><br/>
                <div className={styles.profile}>
                    <div className={styles.profileSubtext}>
                        <img 
                            src={'/images/urosDjakovic.png'}
                            alt={'Slika Ukija'}
                            style={{width: '100%'}}
                        />
                        <div className={styles.profileTextSection}>
                            <div>&apos;&apos;Beohost is a proptech startup, and we needed help in creating and launching a new software product. Furtherance helped us find the right software development agency,
                                with whom we were able to build a product from scratch and launch it in a couple of months.&apos;&apos;</div>
                            <div className={styles.profileText}>
                                <div className={styles.profileTextTitle}>Uros Djakovic, Founder</div>
                                <a style={{textDecoration: 'underline'}} href='https://beohost.rs/' target='_blank' rel='noopener noreferrer'>Beohost</a>
                                <div className={styles.profileLnSection}>
                                    <a style={{marginRight: '10px'}} href='https://www.linkedin.com/in/urosdjakovic/' target='_blank' rel='noopener noreferrer'>
                                        <img
                                            src={'/images/ln.svg'}
                                            alt={'LN logo'}
                                            style={{width: '100%'}}
                                        />
                                    </a>
                                    <img
                                        src={'/images/serbia.png'}
                                        alt={'zastava nemacke'}
                                        style={{width: '15%'}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br/>
                <div className={styles.profile} style={{marginRight: '0px'}}>
                    <div className={styles.profileSubtext}>
                        <img 
                            src={'/images/nikolaSamardzija.png'}
                            alt={'nikola Slika'}
                            style={{width: '100%'}}
                        />
                        <div className={styles.profileTextSection}>
                            <div>&apos;&apos;Skenit is a startup focused on the fitness industry, and we had lots of challenges
                                at the beginning. Furtherance helped us on different aspects of our business. They connected us
                                with a sales mentor who helped us refine and structure our sales strategy, and they connected us with
                                various experts in the industry.&apos;&apos;</div>
                            <div className={styles.profileText}>
                                <div className={styles.profileTextTitle}>Nikola Samardzija, Founder</div>
                                <a style={{textDecoration: 'underline'}} href='https://skenit.com/' target='_blank' rel='noopener noreferrer'>Skenit</a>
                                <div className={styles.profileLnSection}>
                                    <a style={{marginRight: '10px'}} href='https://www.linkedin.com/in/nikolasamardzija5/' target='_blank' rel='noopener noreferrer'>
                                        <img
                                            src={'/images/ln.svg'}
                                            alt={'LN logo'}
                                            style={{width: '100%'}}
                                        />
                                    </a>
                                    <img
                                        src={'/images/serbia.png'}
                                        alt={'zastava nemacke'}
                                        style={{width: '15%'}}
                                    />
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