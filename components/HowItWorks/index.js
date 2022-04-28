import styles from '../../styles/Home.module.css';
import useWindowDimensions from '../Hooks/index';


const HowItWorks = () => {
    const {width} = useWindowDimensions();
    return (
        <div>
            <h1 className={styles.howItWorksTitle}>How It Works</h1>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '75px'}}>      
                <div className={styles.freeConsultatinStep1}>
                    <div className={styles.circleDiv}>
                        <span className={styles.circle1}>
                            <span>1</span>
                        </span>
                    </div>
                    <div style={{marginTop: '55px', textAlign: 'center'}}>
                        <h3 style={{marginBottom: '40px'}}>Free consultation</h3>
                        You have a short call with us in order to map out the exact things that you need help with.
                        You might need a sales executive, a consultant,
                        a growth hacker or a lead gen marketing company.
                    </div>
                </div>
                    <div className={styles.freeConsultatinStep2}>
                        <div className={styles.circleDiv} style={{top: '-45px'}}>
                            <span className={styles.circle2}>
                                <span>2</span>
                            </span>
                        </div>
                        <div style={{marginTop: '55px', textAlign: 'center'}}>
                            <h3 style={{marginBottom: '40px'}}>We find you a match</h3>
                            Based on your needs, we create a private tender for your specific case. We push this to our
                            private network of verified experts and 
                            outsourcing firms and get you the best price/value deal. <br/><br/>
                            <span style={{fontWeight: 600}}>Partners are carefully selected, verified and vetted and we have a developed personal connection with them.</span>
                        </div>
                    </div>
            
                <div className={styles.freeConsultatinStep3}>
                    <div className={styles.circleDiv}>
                        <span className={styles.circle3}>
                            <span>3</span>
                        </span>
                    </div>
                    <div style={{marginTop: '55px', textAlign: 'center'}}>
                        <h3 style={{marginBottom: '40px'}}>You get connected</h3>
                        You get between 1 and 3 different offers, and get connected with verified experts and
                        outsource companies, and you choose your fit.  
                    </div>
                </div>
            </div>
            <div className={styles.freeConsultatinStep4}>
                <h3>Pricing</h3>
                <sapn style={{borderBottom: '1px solid #FE7062'}}>We only charge if you do a deal with our partners! We take a small finders fee.</sapn>  
            </div>
        </div>
    );
};


export default HowItWorks;