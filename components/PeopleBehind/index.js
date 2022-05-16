import styles from '../../styles/Home.module.css';

const PeopleBehindUs = () => {
    return (
        <div className={styles.peopleBehindUs}>
            <h1>Who are the people behind Furtherance</h1>
            <p className={styles.peopleBehindUsP}>Furtherance is a private matchmaking platform that helps startup founders like yourself find the right fit for your current challenges. The other side of the platform consist of a private network of both industry experts and outsource agencies for all sorts of topics like sales, HR, marketing, Near-shoring, fundraising etc. Furtherance has created and verified that network in order to provide startups and scaleups with a single platform through which they can find the right partner to help them go further in their business
                Want to qualify for our network? Reach us at: <span className={styles.mail} onClick={() => window.location = 'mailto:sales@furtherance.rs'}>sales@furtherance.rs</span>
            </p>
            <div className={styles.pictureRow}>
                <div className={styles.oneRow}>
                    <h2 style={{marginTop: '0px'}}>Why</h2>
                    <img
                        src={'/images/whoPicture.png'}
                        alt='Who Picture'
                        style={{width: '100%'}}
                    />
                    <p className={styles.peopleBehindUsSubP}>One of the biggest reasons startups fail is because they couldn&apos;t, find the right people or companies to help them go further in their business. The reasons were either, they didn&apos;t know anyone or they didn&apos;t have enough time to invest in finding them. Because we were able to help startups in this regard, we created Furtherance.</p>
                </div>
                <div className={styles.oneRow}>
                    <h2 style={{marginTop: '0px'}}>How</h2>
                    <img
                        src={'/images/whatPicture.png'}
                        alt='What Picture'
                        style={{width: '100%'}}
                    />
                    <p className={styles.peopleBehindUsSubP}>The Furtherance team consists of seasoned people in the startup ecosystem. We help you firstly, by talking with you, understanding where you are at, and giving advice on how you can solve some of your challenges. We do this free of charge. If you feel that you can&apos;t solve some of them on your own, we connect you with our partners.</p>
                </div>
                <div className={styles.oneRow}>
                    <h2 style={{marginTop: '0px'}}>What</h2>
                    <img
                        src={'/images/whyPicture.png'}
                        alt='Why Picture'
                        style={{width: '100%'}}
                    />
                    <p className={styles.peopleBehindUsSubP}>
                    Partners include a lot of different people, but mostly the services they provide are: <br/><br/>
                    <span style={{fontWeight: 600}}>Consultants in the field of fundraising, sales, marketing, business development and
                        Outsource agencies for HR and hiring nearshore/offshore IT teams or Sales teams for UK/USA/AU/Balkans.</span></p>
                </div>
            </div>
        </div>
    );
};

export default PeopleBehindUs;