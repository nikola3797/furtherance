import styles from '../../../styles/Home.module.css';

const LetsTalkBtn = (props) =>{
    return (
        <button
            className={styles.letsTalkBtn}
            onClick={props.onLetsTalkClick}
        >
            Let's Talk
        </button>
    );
};

export default LetsTalkBtn;