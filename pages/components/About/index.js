import styles from '../../../styles/Home.module.css';
import useWindowDimensions from '../Hooks/index';
import Image from 'next/image';
import Uki from '../../../assets/images/uki.jpg';
import Paja from '../../../assets/images/paja.jpg';
import Nikola from '../../../assets/images/nikola.samardzija.jpg';



const About = () => {
    const {width} = useWindowDimensions();
    return (
        <div className={styles.about}>
            <h1 className={styles.aboutTitle}>What other people say about us</h1>
            <div className={styles.profileContainer}>
                {width > 600 && <h3 className={styles.titleh3}>Don't trust us, {'\n'} trust them...</h3>}
                <div className={styles.profile}>
                    <div className={styles.profileSubtext} style={{height: '60%'}}>
                        <Image src={Paja} />
                        <div style={{paddingTop: '50px', fontWeight: 600}}>Michael</div>
                        <div>Company name</div>
                    </div>
                </div><br/>
                <div className={styles.profile}>
                    <div className={styles.profileSubtext} style={{height: '60%'}}>
                        <Image src={Uki} />
                        <div style={{paddingTop: '50px', fontWeight: 600}}>Michael</div>
                        <div>Company name</div>
                    </div>
                </div><br/>
                <div className={styles.profile}>
                    <div className={styles.profileSubtext} style={{height: '60%'}}>
                        <Image src={Nikola} />
                        <div style={{paddingTop: '50px', fontWeight: 600}}>Michael</div>
                        <div>Company name</div>
                    </div>
                </div><br/>
            </div>
        </div>
    );
};

export default About;