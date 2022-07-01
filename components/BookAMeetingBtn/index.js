import styles from '../../styles/Home.module.css';

const BookAMeetingBtn = () =>{
    return (
        <a
            className={styles.bookAMetting}
            href='https://calendly.com/vladislav-pavlov1/30min'
            target="_blank"
            rel="noopener noreferrer"
        >
            Book a meeting
        </a>
    );
};

export default BookAMeetingBtn;