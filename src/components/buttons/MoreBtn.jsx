import styles from "./buttons.module.scss";
const MoreBtn = (props) => {
    return(
        <button onClick={props.onClick} className={styles.more}> Показать еще {props.count}</button>
    )
}

export default MoreBtn