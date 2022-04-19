import styles from '../../styles/Home.module.css';
import {useState} from 'react';


const LetsTalk = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [organizationName, setOrganizationName] = useState('');
    const [team, setTeam] = useState('');
    const [date, setDate] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');


    const onSubmit = () => {
        event.preventDefault();
        console.log(
            {
                firstName,
                lastName,
                email,
                phone,
                team,
                organizationName,
                date,
            }
        )
        setDate('');
        setEmail('');
        setFirstName('');
        setOrganizationName('');
        setTeam('');
        setLastName('');
        setPhone('');
    }

    return (
        <div className={styles.letsTalk}>
            <h1>Lets Talk</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <div>
                    <div className={styles.letsTalkPadding}>Hello,</div>
                    <div className={styles.letsTalkPadding}>
                        My name is 
                        <input className={styles.input} style={{marginRight: '10px'}} value={firstName} onChange={e => setFirstName(e.target.value)} name='firstName' type='text' placeholder='First name' />
                        <input className={styles.input} value={lastName} onChange={e => setLastName(e.target.value)} type='text' placeholder='Last name' name='lastName' />
                        with <input className={styles.input} value={organizationName} onChange={e => setOrganizationName(e.target.value)} type='text' name='organizationName' placeholder='Organization name'/>
                    </div>
                    <div className={styles.letsTalkPadding}>
                        I am writing to you becouse i am in need of a expert/outsource agency to fill the gaps in <input value={team} onChange={e => setTeam(e.target.value)} name='team' className={styles.input} type='text' placeholder='Team or Topic'/>
                    </div>
                    <div className={styles.letsTalkPadding}> 
                        My hope is to have it completed by <input className={styles.input} value={date} onChange={e => setDate(e.target.value)} name='date' type='text' placeholder='Date'/> I would love to get the conversation started so 
                    </div>
                    <div className={styles.letsTalkPadding}>
                        pease reach  out to me at <input className={styles.input} value={email} onChange={e => setEmail(e.target.value)} type='text' name='email' placeholder='Email'/> or 
                        <input className={styles.input} type='text' value={phone} onChange={e => setPhone(e.target.value)} placeholder='Phone' name='phone'/> Thanks
                    </div>
                    <div className={styles.submitBtn}>
                        <input className={styles.letsTalkBtn} type="submit" value='Send'/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LetsTalk;