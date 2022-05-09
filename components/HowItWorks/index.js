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
                    <div style={{marginTop: '40px', textAlign: 'center'}}>
                        <h3 style={{marginBottom: '30px'}}>Free consultation</h3>
                        You get a free consultation with one of our experts. Here we look to understand your exact business challenges, and who is the best fit.
                        You might need a sales executive, a UX designer or a remote lead gen/marketing/IT company. 
                    </div>
                </div>
                    <div className={styles.freeConsultatinStep2}>
                        <div className={styles.circleDiv} style={{top: '-45px'}}>
                            <span className={styles.circle2}>
                                <span>2</span>
                            </span>
                        </div>
                        <div style={{marginTop: '55px', textAlign: 'center'}}>
                            <h3 style={{marginBottom: '30px'}}>We find you a match</h3>
                            Based on your needs, we go through our network to find the best partner and the best price/value deal.<br/><br/>
                            <span style={{fontWeight: 600}}>Partners are carefully selected, verified and vetted and we have a developed personal connection with them.</span>
                        </div>
                    </div>
            
                <div className={styles.freeConsultatinStep3}>
                    <div className={styles.circleDiv}>
                        <span className={styles.circle3}>
                            <span>3</span>
                        </span>
                    </div>
                    <div style={{marginTop: '40px', textAlign: 'center'}}>
                        <h3 style={{marginBottom: '30px'}}>You get connected</h3>
                        You get connected with 1 - 3 different partners, and you choose your fit.<br/><br/>
                        Partners consist of specialized professionals or outsourced companies in the fields of sales, marketing, fundraising, IT and others.
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