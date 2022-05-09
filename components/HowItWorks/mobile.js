import styles from '../../styles/Home.module.css';


const HowItWorksMobile = () => {
    return (
        <div>
            <h1 className={styles.howItWorksTitle}>How It Works</h1>
            <div className={styles.howItWorks}>
                <div className={styles.stepOne}>
                    <div className={styles.freeConsultatinStep1}>
                        <div className={styles.circleDiv}>
                            <span className={styles.circle1}>1</span>
                        </div>
                        <h4>Free consultation</h4>
                        You get a free consultation with one of our experts. Here we look to understand your exact business challenges, and who is the best fit.
                        You might need a sales executive, a UX designer or a remote lead gen/marketing/IT company. 
                    </div>
                </div>
            <div>
                <div className={styles.freeConsultatinStep2}>
                    <div className={styles.circleDiv}>
                        <span className={styles.circle2}>2</span>
                    </div>
                    <h4>We find you a match</h4>
                    Based on your needs, we go through our network to find the best partner and the best price/value deal.<br/><br/>
                    <span style={{fontWeight: 600}}>Partners are carefully selected, verified and vetted and we have a developed personal connection with them.</span>
            </div>
                <div>
                    <div className={styles.freeConsultatinStep3}>
                        <div className={styles.circleDiv}>
                            <span className={styles.circle3}>3</span>
                        </div>
                        <h4>You get connected</h4>
                        You get connected with 1 - 3 different partners, and you choose your fit.<br/><br/>
                        Partners consist of specialized professionals or outsourced companies in the fields of sales, marketing, fundraising, IT and others.  
                    </div>
                </div>
                <div style={{marginRight: '-15px', marginLeft: '-15px', paddingLeft: '15px', paddingRight: '15px'}} className={styles.freeConsultatinStep4}>
                    <h3>Pricing</h3>
                    <sapn style={{borderBottom: '1px solid #FE7062'}}>We only charge if you do a deal with our partners! We take a small finders fee.</sapn>  
            </div>
            </div>
        </div>
        </div>
    );
};


export default HowItWorksMobile;