import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import whoPicture from '../../assets/images/whoPicture.png';
import whatPicture from '../../assets/images/whatPicture.png';
import whyPicture from '../../assets/images/whyPicture.png';


const PeopleBehindUs = () => {
    return (
        <div className={styles.peopleBehindUs}>
            <h1>Who are the people behind Furtherance</h1>
            <p className={styles.peopleBehindUsP}>Furtherance is a private matchmaking platform that helps startup founders like yourself find the right fit for your current challenges. The other side of the platform consist of a private network of both industry experts and outsource agencies for all sorts of topics like sales, HR, marketing, Near-shoring, fundraising etc. Furtherance has created and verified that network in order to provide startups and scaleups with a single platform through which they can find the right partner to help them go further in their business
                Want to qualify for our network? Reach us at: <span className={styles.mail} onClick={() => window.location = 'mailto:sales@furtherance.rs'}>sales@furtherance.rs</span>
            </p>
            <div className={styles.pictureRow}>
                <div className={styles.oneRow}>
                    <h2 style={{marginTop: '0px'}}>Who</h2>
                    <Image
                        src={whoPicture}
                        alt='Who Picture'
                    />
                    <p className={styles.peopleBehindUsSubP}>Furtherance is a collective of founders, sales and marketing experts, fundraising consultants and outsource agencies for all relevant topics that startups need.</p>
                </div>
                <div className={styles.oneRow}>
                    <h2 style={{marginTop: '0px'}}>What</h2>
                    <Image
                        src={whatPicture}
                        alt='What Picture'
                    />
                    <p className={styles.peopleBehindUsSubP}>Services include:<br/>
                        Consultants in the field of fundraising, sales, marketing, business development and <br />
                        Outsource agencies for HR and hiring nearshore/offshore IT teams or Sales teams for UK/USA/AU/Balkans</p>
                </div>
                <div className={styles.oneRow}>
                    <h2 style={{marginTop: '0px'}}>Why</h2>
                    <Image
                        src={whyPicture}
                        alt='Why Picture'
                    />
                    <p className={styles.peopleBehindUsSubP}>
                        Furtherance was formed because the founding members simply knew a lot of people, and liked connecting and helping founders
                        in their ecosystem. They understood how important one person can be to the success or failure of a
                        small and growing startup, so they created Furtherance.</p>
                </div>
            </div>
        </div>
    );
};

export default PeopleBehindUs;