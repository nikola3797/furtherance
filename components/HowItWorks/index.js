import Image from 'next/image';
import arrowPic from '../../assets/images/arrows.svg';
import styles from '../../styles/Home.module.css';
import useWindowDimensions from '../Hooks/index';


const HowItWorks = () => {
    const {width} = useWindowDimensions();
    return (
        <div>
            <h1 className={styles.howItWorksTitle}>How It Works</h1>
            <div className={styles.howItWorks}>
                <div>
                    <div className={styles.freeConsultatinStep2}>
                        <div className={styles.circleDiv}>
                            <span className={styles.circle2}>2</span>
                        </div>
                        <h4>We find you a match</h4>
                        Based on your needs, we create a private tender for your specific case. We push this to our
                        private network of verified experts and 
                        outsourcing firms and get you the best price/value deal. {'\n'}
                        Partners are carefully selected, verified and vetted and we have a developed personal connection with them.
                    </div>
                </div>
                {width > 600 && <Image
                    src={arrowPic}
                />}
                <div>
                    <div className={styles.stepOne}>
                        <div className={styles.freeConsultatinStep1}>
                            <div className={styles.circleDiv}>
                                <span className={styles.circle1}>1</span>
                            </div>
                            <h4>Free consultation</h4>
                            You have a short call with us in order to map out the exact things that you need help with.
                            You might need a sales executive, a consultant,
                            a growth hacker or a lead gen marketing company
                        </div>
                    </div>
                    <div>
                        <div className={styles.freeConsultatinStep3}>
                            <div className={styles.circleDiv}>
                                <span className={styles.circle3}>3</span>
                            </div>
                            <h4>You get connected</h4>
                            You get between 1 and 3 different offers, and get connected with verified experts and
                            outsource companies, and you choose your fit. {'\n'}
                            Pricing: We only charge if you do a deal with our partners! We take a small finders fee  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HowItWorks;