import styles from './buttons.module.scss';
import classNames from "classnames";

const DefaultButton = ({onClick,modeClass,text}) => {
    return (
        <button onClick={onClick} className={classNames(styles.default, modeClass === 'blue' ? styles.blue : null)}>
            {text}
        </button>
    )
}

export default DefaultButton;