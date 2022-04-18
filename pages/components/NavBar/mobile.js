import styles from '../../../styles/Home.module.css';

const MobileNavBar = (props) => {
    return (
        <div className={styles.mobileDiv}>
            <a onClick={props.homeClick} className={styles.mobileLink}>Home</a>
            <a onClick={props.howItWorksClick} className={styles.mobileLink}>How it works</a>
            <a onClick={props.aboutClick} className={styles.mobileLink}>About</a>
            <a onClick={props.contactClick} className={styles.mobileLink}>Contact</a>
        </div>
    );
};

export default MobileNavBar;