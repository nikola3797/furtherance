import styles from '../../styles/Home.module.css';

const LetsTalkBtn = (props) =>{
    return (
        <button
            className={styles.letsTalkBtn}
            onClick={props.onLetsTalkClick}
            style={props.style}
        >
            Let&apos;s Talk
        </button>
    );
};

export default LetsTalkBtn;