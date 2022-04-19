import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import firstPic from '../../assets/images/1.png';
import secondPic from '../../assets/images/2.png';
import thirdPic from '../../assets/images/3.png';


const PeopleBehindUs = () => {
    return (
        <div className={styles.peopleBehindUs}>
            <h1>Who are the people behind the furtherance</h1>
            <p className={styles.peopleBehindUsP}>Furtherance has united them, in order to provide a better and more qualified network to help startups and scaleups reach their goals faster
                and expand their business. Want to qualify for our network? Reach us here: <span className={styles.mail} onClick={() => window.location = 'mailto:network@furtherance.rs'}>network@furtherance.rs</span>
            </p>
            <div className={styles.pictureRow}>
                <div>
                    <Image src={firstPic} />
                    <p className={styles.peopleBehindUsSubP}>We have been connecting startups and scaleups in their ecosystems for the past 10 years</p>
                </div>
                <div>
                    <Image src={secondPic} />
                    <p className={styles.peopleBehindUsSubP}>Furtherance is a collective of founders, sales experts, marketing experts, and VC investors.</p>
                </div>
                <div>
                    <Image src={thirdPic} />
                    <p className={styles.peopleBehindUsSubP}>Their reasons for doing so were simple, they knew people, and they liked helping founders in their ecosystem.</p>
                </div>
            </div>
        </div>
    );
};

export default PeopleBehindUs;